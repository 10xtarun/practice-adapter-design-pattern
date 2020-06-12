# 1_adapter_design_pattern

## References
* [GFG] ("https://www.geeksforgeeks.org/adapter-pattern/")

## ADP in OOPs
1. client makes a request to adapter 
2. adapter translates that request on the adaptee interface
3. client receives the result irrespective of adapter's presence 


> In naive terms, two classes may perform same or similar task but have different interface and that's why they need to be connected in adapter pattern

## Examples from
* [ADPinJS]("https://www.dofactory.com/javascript/adapter-design-pattern")
* ADP is exact analogous of travel adapter which we use in real world, this adapter can fit to any electrical socket
* [AdapterInNodeJs]("https://softwarebrothers.co/blog/adapter-pattern-in-node-js/")

## Takeaways from Examples
> we can term the adapter as, one of the way to make old code workable along with implementing new code
> this will not affect the implementation of the API
> request is unaware of such adapters but they get their response done

## More simplistic definition
> The Adapter design pattern is a strtuctural design pattern used to make two unrelated and incompatible interfaces or classes work together that could not be achieved otherwise due to mismatched interfaces. It wraps an existing class with a new interface, which is why it is also known as the Wrapper design pattern

