# ANIMATED DROPDOWN

## DEMO 

![demo]()

## INSTALLATION 

- clonse this repo
- extract ```AnimatedDropdown``` folder to your projects directory
- import ```AnimatedDropdown``` file wherever you want to use it ```import AnimatedDropdown from '*path'```
- you need to have sass installed as one of your projects dependency ```npm install sass```
- if using webpack make sure your loader can preprocess scss files

## USAGE

Usable props change depending on ```shape``` prop
MANDATORY PROPS:
- ```list``` this prop takes an array of objects eg.```[{value: 'first item', id: 1}, ...]```
![demo]()

- ```shape='rectangle'``` or ```shape='circle'``` self explanatory
![demo]()

PROPS BASED ON ```SHAPE``` PROP

If ```shape='circle'``` :
- ```picture``` this prop takes path to your image
![demo]()

If ```shape='rectangle'```:
- ```headerPosition="right"``` default is left, if shape === ```circle``` this does nothing
![demo]()

- ```title="MENU"``` text displayed in the header
![demo]()

- theme ```black``` is default, ```red```, ```green```, ```blue```
![demo]()
![demo]()
![demo]()
![demo]()
