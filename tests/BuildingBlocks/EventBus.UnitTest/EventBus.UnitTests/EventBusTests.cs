using EventBus.Base;
using EventBus.Base.Abstraction;
using EventBus.Factory;
using EventBus.UnitTests.EventUtils.EventHandlers;
using EventBus.UnitTests.EventUtils.Events;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RabbitMQ.Client;

namespace EventBus.UnitTests
{
    [TestClass]
    public class EventBusTests
    {
        private ServiceCollection services;
        public EventBusTests()
        {
            services = new ServiceCollection();
            services.AddLogging(configure => configure.AddConsole());
        }
        [TestMethod]
        public void subscribe_event_on_rabbitmq_test()
        {
            services.AddSingleton<IEventBus>(sp =>
            {
                EventBusConfig config = GetRabbitMQConfig();

                return EventBusFactory.Create(config, sp);
            });

            var serviceProvide = services.BuildServiceProvider();

            var eventBus = serviceProvide.GetRequiredService<IEventBus>();

            eventBus.Subscribe<OrderCreatedIntegrationEvent, OrderCreatedIntegrationEventHandler>();
            //eventBus.UnSubscribe<OrderCreatedIntegrationEvent, OrderCreatedIntegrationEventHandler>(); 
        }

        [TestMethod]
        public void subscribe_event_on_azure_test()
        {
            services.AddSingleton<IEventBus>(sp =>
            {
                EventBusConfig config = GetAzureConfig();

                return EventBusFactory.Create(config, sp);

            });

            var serviceProvide = services.BuildServiceProvider();

            var eventBus = serviceProvide.GetRequiredService<IEventBus>();

            eventBus.Subscribe<OrderCreatedIntegrationEvent, OrderCreatedIntegrationEventHandler>();
            eventBus.UnSubscribe<OrderCreatedIntegrationEvent, OrderCreatedIntegrationEventHandler>();
        }
        [TestMethod]
        public void send_message_to_rabbitmq_test()
        {
            services.AddSingleton<IEventBus>(sp =>
            {
                EventBusConfig config = GetRabbitMQConfig();

                return EventBusFactory.Create(config, sp);
            });

            var serviceProvide = services.BuildServiceProvider();
            var eventBus = serviceProvide.GetRequiredService<IEventBus>();

            eventBus.Publish(new OrderCreatedIntegrationEvent());
        }

        [TestMethod]
        public void send_message_to_azure_test()
        {
            services.AddSingleton<IEventBus>(sp =>
            {
                EventBusConfig config = GetAzureConfig();

                return EventBusFactory.Create(config, sp);
            });

            var serviceProvide = services.BuildServiceProvider();
            var eventBus = serviceProvide.GetRequiredService<IEventBus>();

            eventBus.Publish(new OrderCreatedIntegrationEvent(1));
        }

        private EventBusConfig GetAzureConfig()
        {
            return new EventBusConfig()
            {
                ConnectionRetryCount = 5,
                SubscriberClientAppName = "EventBus.UnitTest",
                DefaultTopicName = "SellerTopicName",
                EventBusType = EventBusType.AzureServiceBus,
                EventNameSuffix = "IntegrationEvent",
                EventBusConnectionString = ""
            };
        }

        private EventBusConfig GetRabbitMQConfig()
        {
            return new EventBusConfig()
            {
                ConnectionRetryCount = 5,
                SubscriberClientAppName = "EventBus.UnitTest",
                DefaultTopicName = "SellerTopicName",
                EventBusType = EventBusType.RabbitMQ,
                EventNameSuffix = "IntegrationEvent",
                /*
                Connection = new ConnectionFactory()
                {
                    HostName = "localhost",
                    Port = 5672,
                    UserName = "guest",
                    Password = "guest"
                } 
                * Default values
                */
            };
        }
    }
}