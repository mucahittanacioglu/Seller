using EventBus.Base.Abstraction;
using EventBus.UnitTests.EventUtils.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventBus.UnitTests.EventUtils.EventHandlers
{
    public class OrderCreatedIntegrationEventHandler : IIntegrationEventHandler<OrderCreatedIntegrationEvent>
    {
        public Task Handle(OrderCreatedIntegrationEvent @event)
        {
           Console.WriteLine("Handle method worked with id: "+ @event.Id);
           return Task.CompletedTask;
        }
    }
}
