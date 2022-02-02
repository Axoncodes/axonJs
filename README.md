This module has got simple solutions so that you wouldn't need to focus on the chores

### IF
Instead of going through long if statements just to make sure an object-nested property exists, do it just once:

##### Example:
If you're looking for the myobj.names.age.grade in an object, which means, you would have to write a long if statement, instead, you can do this:
```
xjs.if(myobj, 'myobj.names.age.grade')
```

### OR
When you want to just select the fist valid variable in a bunch of them, just list the vars as array, and we shall answer you in a matter of a second

#### Example:
```
 xjs.or([contour[key.replace(/x/g, 'y')], prevY])
```

### MAP
When you use the 'map', the good thing is that it returns the data directly back to you unlike 'forEach', but the one thing that I hate, is that if you would try to process the inputes of the array given to the 'map' and then decide to whether return the answer or not, on false, it returns you null

So here we are, no extra step or forEach required:

#### Example:
```
return xjs.map(fontJson, tag => 
  tag.tag == 'glyph'
    ? return tag.attributes.unicode.replace(/-/g, '_')
    : null
)
```