# Development and Process

Here I will detail how I structured the game, the considerations around it
and how everything works.


## Interface

If you've seen the UI layout on the README, here is a mindmap detailing
how it is structured, although since the first prototypes, all the elements
were moved into DOM manipulation inside JavaScript, leaving the HTML as a
template.
![ui-mindmap 10](images/interface-schematic.png)

## Data Structure

## Start Sequence and level progression

## Lifes

## Score

## Considerations

Because I went for a more functional approach, I tried to keep each part of the game
separate and independent, so at each user interaction there is one function that calls
every other part, but there is no function rabbit hole (function invoking function invoking function and so on), 
so debugging was a little easier, because bugs are always part-specific, although on the other side of the coin, 
more attention was required as things would work without necessarily being right.