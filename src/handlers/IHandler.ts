export default interface IHandler<T> {
    handle(data: T): Promise<void>
}