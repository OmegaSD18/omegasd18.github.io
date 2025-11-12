---
title: "Zeeman's Proof of Classification of Compact Surfaces."
date: 2024-09-15
# weight: 1
# aliases: ["/first"]
tags: ["Algebraic Topology"]
author: Soumya Dasgupta
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
description: "A mathematician's dream of doing surgeries on a surface."
UseHugoToc: true
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page

math: true
draft: true
---

In mathematics results involving classifying a certain class of objects are always very fascinating. In this post I would like to talk about classification of compact surfaces. I will like to keep this proof quite vague so that it is easy to read on the first go and yet I'll try to provide all the necessary details. 

What is a surface? A surface is a Hausdorff, second countable topological space $S$ which is locally flat, that is, for any point $p \in S$, there exists an open set $U \subseteq M$ containing $p$ such that there is a homeomorphism $\varphi : U \to \R^2$. In this post we will deal with compact surfaces and I'll try to classify surfaces upto homeomorphisms. 

Looking at the examples it is not at all obvious how to approach a problem like this. Lets look at some more examples. 

**Main Theorem (Classification Theorem for Compact Surfaces).** Upto homeomorphism any compact surface is either a sphere $S^2$, or a sphere with $g$ many handles attached $\Sigma_g$, or a sphere with $g$ many Mobius strips attached to it $N_g$.

## Triangulation of Surfaces

Most of the proofs of the classification of compact surfaces, start with the fact that any surface can be triangulated. By a triangulation I mean that our surface is made up of triangles, that is, 2-simplices which are patched together along subsimplices. Lets make things precise. A $n$-simplex in $\R^{n+1}$ is the subset $$ \triangle^n = \left\\{ (x_0,\dots,x_n) \in \R^n \mid \sum_{i=0}^n x_i = 1 \right\\} $$
and it has $\binom{n+1}{i+1}$ many $i$-subsimplices given by $$ \triangle^i_{j_0,\dots,j_i} = \left\\{ (x_0,\dots,x_n) \in \triangle^n \mid x_j = 0 \text{ if } j \notin \\{j_0,\dots,j_i\\} \right\\}. $$

Now I take a collection $\mathcal{K}$ of simplices such that each of subsimplex is also in the collection, I can then form a topological space by gluing all these simplicies such that if two simplices intersect they do so along a subsimplex, a topological obtained in this way is called a simplicial complex, and it is denoted by $|\mathcal{K}|$. If our collection $\mathcal{K}$ was finite, then we say $|\mathcal{K}|$ is a finite simplicial complex. A topological space $X$ is said to be triangulizable if there exists a collection of simplices $\mathcal{K}$ and a homeomorphism $\varphi : |\mathcal{K}| \to X$.

A very important construction in a simplicial complex is doing barycentric subdivision, even though this is not at all a difficult construction, but we will stick to the particular case, when the simplicial complex is a topological surface. Let $|\mathcal{K}|$ be a simplicial complex which is a surface, in this case we only have to deal with 2,1,0-simplices. In a $2$-simplex you define some new vertices which are barycenter of the 2-simplex itself, the three barycenters of the three edges, and then you subdivide the 2-simplex as it is shown in the figure below. You do this to all the 2-simplices to get a new triangulation of the space which is finer than the original triangulation, we will denote this by $\mathcal{K}^1$, and it is called the first barycentric subdivision of $\mathcal{K}$. You can repeat the barycentric subdivision process in $\mathcal{K}^1$ to get the second barycentric subdivision $\mathcal{K}^2$, and in general you can continue in this process to get the $n$-th barycentric subdivision $\mathcal{K}^n$. In the next section I'll use the second barycentric subdivision to make few arguments more rigorous.

Another important topological invariant which I'll use in the proof of the main theorem is Euler characteristic, if you familiar with homology theory then you must familiar with the fact that Euler characteristic is a homotopy invariant of spaces whose homology groups are bounded above. In particular for finite simplicial complexes (say it has simplices of dimension at most $n$) there's a simple formula for the Euler characteristic, given by 
$$ \chi(|\mathcal{K}|) = \sum_{i=0}^n (-1)^i |\\{ \text{number of $i$-simplices in $\mathcal{K}$} \\}| $$
And if you have a triangulated space $X$ with triangulation $\varphi : |\mathcal{K}| \to X$, you define $\chi(X) = \chi(|\mathcal{K}|)$. Apriori from the definition it is not at all clear that the Euler characteristic is a topological invariant, that is, it is independent of the triangulation, but homology theory tells us that if $H_k(X) = 0$ for $k > n$, then the Euler characteristic is given by 
$$ \chi(X) = \sum_{i=0}^n \text{rank}(H_i(X;\Z)) = \sum_{i=0}^n \text{dim}_{\mathbb{Q}}(H_i(X;\Z) \otimes \mathbb{Q}). $$
Now since homology groups are homotopy invariants, particular if you have two homeomorphic topological spaces their homology groups are also isomorphic, hence the Euler characteristic is homotopy invariant, in particular it is invariant upto homeomorphism.

**Theorem 1 (Triangulation of Surfaces).** Any surface can be triangulated.

The proof of the theorem is quite technical so I'll skip the proof, but you can refer to Rado's paper for the proof. Rado's proof involves Schoenflies Theorem which is a technical result in topology, but there are some sophisticated proofs which avoid this line of arguments, I'll briefly talk about them avoiding all the details but I'll try to provide good references. If you are reading the proof of the main theorem for the first time you can safely skip the below sketchy ideas and go directly to the section Poincare-type Conjecture in dimension 2.

Let $X$ be a smooth manifold. There's a popular trick called the Kirby torus trick also called the handle smoothing theorem, which says that given a topological embedding $D^k \times \R^{n-k} \to X$ which is smooth near $\partial D^k \times \R^{n-k}$ can be isotoped to be a smooth embedding in a neighborhood of $D^k \times \\{0\\}$ and which is constant outside a larger neighborhood of $D^k \times \{0}$ and near $\partial D^k \times \R^{n-k}$. It turns out any surface can be made into a smooth surface, so even though apriori we don't know whether our surface is smooth but we may assume it is smmoth. Now since a surface is locally flat, you can easily triangulate it locally and using the above handle smoothing trick we can actually smoothen out the edges of the triangles to make the triangulation compatible on the intersections, for more details there's an excellent note by Hatcher on the Kirby Torus Trick, you can refer to it. 

Another approach is using Morse Theory which again uses the fact that surfaces are in fact smooth. Using Morse Theory it can shown that any compact surface obtained as by attaching cells, that is, you can give a CW complex structure on it. This is done by studying a Morse function whose critical points are at distinct level, and whenever you encounter a critical point with index $k$ you have to attach a $k$-cell, for more details you can refer to Milnor's note on Morse Theory. Finally it is a fact that any CW complex can be given a simplicial complex structure, this will show that your favourite surface can be triangulated.

## Poincare-type Conjecture in dimension 2

Suppose you have a surface $S$ and consider a triangulation $\varphi : |\mathcal{K}| \to S$, a _simple closed polygonal curve_ $\mathscr{C}$ in $|\mathcal{K}|$ is a simple closed curved which consists of the edges of the triangulation, note that $\mathscr{C}$ is a one-dimensional subcomplex of $|\mathcal{K}|$. We will say the simple closed polygonal curve is separating if it separates $|\mathcal{K}|$, that is, $|\mathcal{K}| \setminus \mathscr{C}$ has two connected components. We will say $S$ is _spherelike_ if any simple closed polygonal curve in $|\mathcal{K}|$ separates it. 

Now given a simple closed polygonal curve, I want to sort of thicken our curve, basically what I want to do is I want to construct an open neighborhood of the closed curve whose boundary will look like a cylinder or a Mobius strip. You need to first observe the fact that since our surfaces are locally flat any triangulation has the property that an edge or a 1-simplex in the triangulation is shared by exactly two 2-simplices. Now suppose you have a simple polygonal closed curve $\mathscr{C}$ in $|\mathcal{K}|$, you consider the second barycentric subdivision $\mathcal{K}^2$ of $\mathcal{K}$, and consider the neighborhood $N(\mathscr{C})$ around the curve which is formed by taking all the simplices in $|\mathcal{K}^2|$ which intersect the edges of the curve, you can look at the figure given below.

The key lemma in proving the main result is the following 

**Lemma 1.** Let $S$ be a surface and let $\varphi : |\mathcal{K}| \to S$ be a triangulation on $S$, then the following statements are equivalent
1. $\chi(S) = 2$.
2. $S$ is homeomorphic to a sphere. 
3. $S$ is spherelike.

The proof of lemma 1 is the heart of the main theorem. I'll strongly suggest that you can first assume this result then directly go into next section where I talk about surgeries and desurgeries, and then you can look at the proof of the main theorem and comeback here to read the proof of lemma 1.

## The Idea of Surgery 

Recall the construction of the neighborhood $N(\mathscr{C})$ from the previous section, here $\mathscr{C}$ is any simple polygonal closed curve in $|\mathcal{K}|$. What are the possibilities for $N(\mathscr{C})$? I'll show that it must be homeomorphic to a cylinder or a Mobius strip. The idea is to look at the vertices of the curve, say they are $v_0, \dots, v_n=v_1$, then one-dimensional subcomplex $T = v_0v_1\cdots v_{n-2}$ forms a tree, and $N(\mathscr{C}) = N(T) \cup N(v_{n-1})$. Now $N(T)$ and $N(v_{n-1})$ are homeomorphic to rectangles, but when you glue them along their boundaries, you may have to either make one twist or no twist, in case when you have to twist one end you get a Mobius strip and in the later case you get a cylinder. If the thicken gives a cylinder I'll say $\mathscr{C}$ is oriented and in the other case I'll say that it is non-oriented.

The idea of doing surgery is the following, suppose you have a surface $X$ with triangulation $|\mathcal{K}|$ which is not spherelike then you will get a simple polygonal closed curve $\mathscr{C}$ which does not separate the surface, then the neighborhood $N(\mathscr{C})$ will also not separate the surface, as its just a thickening of the curve. But then you can look at the boundary of $N(\mathscr{C})$, if it is homeomorphic to a cylinder you will get two disjoint copies of $S^1$ and if it is a Mobius strip you will get just one boundary circle. What you do is you remove the interior of $N(\mathscr{C})$ and remember the labelling on the boundary circles (or cirlce) so that you can later attach the neighborhood $N(\mathscr{C})$. Now you get a surface with boundary which is either a disjoint copy of $S^1$'s or just one copy of $S^1$, in either you just attach a disk along the boundaries to get a surface $X_1$. Note the if you reverse engineer this process, that is the curve is oriented you attach a handle and if the curve is non-oriented you attach a Mobius strip along the boundary of $N(\mathscr{C})$ to get back the original space $X$ from $X_1$, this process is called desurgery. So basically you can do finitely many surgeries whenever it is possible and then later reverse all surgeries by doing desurgeries to get back your space, but why is this helpful? 

## Proof of the Main Theorem 

There's only one thing left to prove, before we prove the main theorem. In the last section I had asked why do we want to do surgeries on a surface, and this is answered by the following lemma.

**Lemma 4.** Let $X_1$ be the compact surface obtained from a not spherelike compact surface $X$ after doing a surgery, then you are in the following situation:
1. If the curve $\mathscr{C}$ was oriented, then $\chi(X_1) = \chi(X) + 2$. 
2. If the curve $\mathscr{C}$ was non-oriented then $\chi(X_1) = \chi(X) + 1$.
So in either case we get a surface with strictly larger Euler characteristic. 

_Proof of the Main Theorem._ If you go back to the last section and club lemma 4 with corollary 3, you will observe after a finite number of surgeries our space is actually spherelike and hence it is actually homeomorphic to a sphere, so finally doing all the desurrgies the original space is actually homeomorphic to a sphere to which a finite number of handles and Mobius strips are attach. But at the start I had told you that attaching a handle in presence of a Mobius strip is equivalent to attaching 2 Mobius strips. Thus our space $X$ is actually homeomorphic to a sphere with finitely handles attached or it is homeomorphic to a sphere with finitely many Mobius strips attached, and this completes the proof of the main theorem. 

## Final Step, How do You Distinguish?

The main theorem says that any surface is either homeomorphic to a sphere, or $\Sigma_g$, or $N_g$, but how we distinguish between them. So far I've not proved that $\Sigma_g$ is not homeomorphic to $N_g$ or a sphere. This can be easily done by computing their fundamental groups. 

**Theorem 5.** 
1. $\pi_1(S^2)$ is trivial. 
2. $\pi_1(\Sigma_g) \cong \langle a_1, b_1, \dots, a_g,b_g \mid a_1b_1a_1^{-1}b_1^{-1} \cdots a_gb_ga_g^{-1}b_g^{-1} \rangle$, and if you look at the abelianization you get $\pi_1^{ab}(\Sigma_g) \cong \Z^{2g}$. 
3. $\pi_1(N_g) \cong \langle a_1, \dots, a_g \mid a_1^2 a_2^2\dots a_g^2 \rangle$, and if you look at the abelianization you get $\pi_1^{ab}(N_g) \cong (\Z/2\Z)^g$.

This shows that neither of the surfaces are homeomorphic to each other.