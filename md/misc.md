---
# pandoc front-matter:
title: languages used for holoRing code.
author:
 - michelc
---
### holowiki have global wikilinks :

 * [[kotlin]]
 * [[blockring]]


## Languages I use for prototyping holoRings

The holoRing backend is IPFS or any CAS (content addressable storage),
IPFS is written is [go][golang]

So today we have bash, perl, go, javascript, kotlin !

I like to prototype with bash + perl as I am "native" with these tools.
however for deployment we use javascript + kotlin

For the whole story : I keep the "perl" for prototyping as
I can really I do anything quickly with it, and we code the enproduct in kotlin,

I don't know kotlin (java like) yet, François does; so in the meantime I use javascript.

The main reason we keep 2 languages is to prove [MLP] design
by writing a specification in two very different languages
therefore the probability of making the same bug twice is very low.

## about bash + python

* https://www.educba.com/bash-shell-programming-with-python/


### my take on it.

I am not too fluent in Python, so I use a combination of "bash+perl", and for portability reason we are migrating to "kotlin" (100% compatible w/ java)
the nice thing about "bash", it is supported by windows10, mac, linux, android,
and so is perl.

