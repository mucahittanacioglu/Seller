using EventBus.Base.Abstraction;
using EventBus.Base.SubManagers;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventBus.Base.Events
{
    public abstract class BaseEventBus : IEventBus
    {
        public readonly IServiceProvider ServiceProvider;
        public readonly IEventBusSubscriptionManager SubscriptionManager;

        public EventBusConfig EventBusConfig { get; set; }

        protected BaseEventBus(IServiceProvider serviceProvider, EventBusConfig eventBusConfig)
        {
            ServiceProvider = serviceProvider;
            this.EventBusConfig = eventBusConfig;
            SubscriptionManager = new InMemoryEventBusSubscribtionManager(ProcessEventName);
        }

        public virtual string ProcessEventName(string eventName)
        {
            if (EventBusConfig.DeleteEventPrefix)
                eventName = eventName.TrimStart(EventBusConfig.EventNamePrefix.ToCharArray());
            
            if(EventBusConfig.DeleteEventSuffix)
                eventName = eventName.TrimEnd(EventBusConfig.EventNameSuffix.ToCharArray());

            return eventName;
        }

        public virtual void Dispose()
        {
            EventBusConfig = null;
            SubscriptionManager.Clear();
        }
        public virtual string GetSubName(string eventName)
        {
            return $"{EventBusConfig.SubscriberClientAppName}.{ProcessEventName(eventName)}";
        }

        public async Task<bool> ProcessEvent(string eventName, string message)
        {
            eventName = ProcessEventName(eventName);
            var processed = false;

            if (SubscriptionManager.HasSubscriptionsForEvent(eventName))
            {
                var subscriptions = SubscriptionManager.GetHandlersForEvent(eventName);

                using(var scope = ServiceProvider.CreateScope())
                {
                    foreach(var subscription in subscriptions)
                    {
                        var handler = ServiceProvider.GetService(subscription.HandlerType);
                        
                        if (handler == null) continue;

                        var eventType = SubscriptionManager.GetEventTypeByName($"{EventBusConfig.EventNamePrefix}{eventName}{EventBusConfig.EventNameSuffix}");
                        var integrationEvent = JsonConvert.DeserializeObject(message, eventType);

                        var concreteType = typeof(IIntegrationEventHandler<>).MakeGenericType(eventType);
                        await (Task)concreteType.GetMethod("Handle").Invoke(handler, new object[] { integrationEvent });  //??
                    }
                }

                processed = true;
            }

            return processed;
        }

        public abstract void Publish(IntegrationEventHandler @event);

        public abstract void Subscribe<T, TH>()
            where T : IntegrationEvent
            where TH : IIntegrationEventHandler<T>;

        public abstract void UnSubscribe<T, TH>()
            where T : IntegrationEvent
            where TH : IIntegrationEventHandler<T>;
    }
}
