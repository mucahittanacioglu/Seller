using EventBus.Base.Events;

namespace EventBus.Base.Abstraction
{
    public interface IIntegrationEventHandler<IIntegrationEvent>  where IIntegrationEvent : IntegrationEvent
    {
        Task Handle(IIntegrationEvent @event);
    }
 
}
