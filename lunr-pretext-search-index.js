var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-vectors-in-the-plane",
  "level": "1",
  "url": "sec-vectors-in-the-plane.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vectors in the plane",
  "body": " Vectors in the plane    A vector in the plane is a directed line segment, which is also called an `arrow'. The set of all vectors in the plane is denoted by .     A vector in the plane      An example is drawn in Figure . To understand the figure and the definition it is important to keep the following fact in mind:   Only the magnitude and direction of a vector matter, not its position in space.   In other words, we can think of a vector as an arrow `floating' in the plane, where translating the arrow (i.e.\\ moving it without rotating or stretching it) gives a vector which is `the same' as the original vector. This is illustrated in Figure : all of these arrows have the same magnitude and direction, so they represent the same vector.   These arrows all represent the same vector      We can also interpret vectors in an algebraic way, using coordinates. We will soon see that this is usually more convenient for doing calculations.     If is a point in the plane, then there is a vector from the origin to . It is denoted by or often by to save space. Note that round brackets are used for points, while square brackets are used for vectors. We call the position vector of the point . The numbers and are called the components of .   The position vector of a point        More generally, if and are points, then we consider the vector from to , written . This is shown in . We say that is the tail and that is the head or tip of the arrow. Since is the displacement vector from to , we have .  A vector         When using a single-letter variable to refer to a vector, it will be typed in bold: for example , , , or . In handwriting, we instead use a squiggle under the vector, which looks like , , etc.    There is a special vector called the zero vector , written as . This is the vector from the origin to the origin with zero magnitude. Therefore .  The zero vector          Recall that different arrows can represent the same vector. Given any arrow, we can move it so that its tail is at the origin.    A vector with its tail at the origin is said to be in standard position .    All position vectors are in standard position, and all vectors in standard position are position vectors of their tip. If is in standard position, where is some point, then . So in standard position, the components of the vector are exactly the same as the coordinates of the point .  Let and be any two vectors in . Then the vectors are equal if and only if they have the same displacement, i.e. which is precisely when the vectors have equal components. So if and , then if and only if and .    Let , , and . Which of the vectors , are equal?  We calculate that and , , and . Thus , and all the other vectors are distinct. (The components of are the negative of the components of , so and have the same length, but they are not equal vectors because they point in opposite directions.)    "
},
{
  "id": "def-vector-plane",
  "level": "2",
  "url": "sec-vectors-in-the-plane.html#def-vector-plane",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A vector in the plane is a directed line segment, which is also called an `arrow'. The set of all vectors in the plane is denoted by .   "
},
{
  "id": "fig-vector",
  "level": "2",
  "url": "sec-vectors-in-the-plane.html#fig-vector",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " A vector in the plane     "
},
{
  "id": "fig-vectranslates",
  "level": "2",
  "url": "sec-vectors-in-the-plane.html#fig-vectranslates",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " These arrows all represent the same vector     "
},
{
  "id": "def-notation-vectors",
  "level": "2",
  "url": "sec-vectors-in-the-plane.html#def-notation-vectors",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "   If is a point in the plane, then there is a vector from the origin to . It is denoted by or often by to save space. Note that round brackets are used for points, while square brackets are used for vectors. We call the position vector of the point . The numbers and are called the components of .   The position vector of a point        More generally, if and are points, then we consider the vector from to , written . This is shown in . We say that is the tail and that is the head or tip of the arrow. Since is the displacement vector from to , we have .  A vector         When using a single-letter variable to refer to a vector, it will be typed in bold: for example , , , or . In handwriting, we instead use a squiggle under the vector, which looks like , , etc.    There is a special vector called the zero vector , written as . This is the vector from the origin to the origin with zero magnitude. Therefore .  The zero vector         "
},
{
  "id": "def-standard-pos",
  "level": "2",
  "url": "sec-vectors-in-the-plane.html#def-standard-pos",
  "type": "Definition",
  "number": "1.1.8",
  "title": "",
  "body": "  A vector with its tail at the origin is said to be in standard position .   "
},
{
  "id": "eg-finding-vectors",
  "level": "2",
  "url": "sec-vectors-in-the-plane.html#eg-finding-vectors",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  Let , , and . Which of the vectors , are equal?  We calculate that and , , and . Thus , and all the other vectors are distinct. (The components of are the negative of the components of , so and have the same length, but they are not equal vectors because they point in opposite directions.)   "
},
{
  "id": "sec-vector-algebra",
  "level": "1",
  "url": "sec-vector-algebra.html",
  "type": "Section",
  "number": "1.2",
  "title": "Vector algebra",
  "body": " Vector algebra  There are two main operations which can be performed on vectors. The first is addition. We add vectors by adding their components.    Given two vectors and , the sum of and is .      If and , then .    Geometrically, vectors are added `tip to tail'. Here's what this means. To calculate geometrically, there are two steps.   Position so that its tail touches the tip of .    To find , draw the arrow that completes the triangle with other two sides and .   In other words, is then vector with its tail at the tail of , and with tip at the tip of , as shown in .   Adding vectors tip to tail        Let and . Algebraically, . We can also calculate this geometrically, which is done in , giving the same answer that .   , geometrically        Addition of vectors is commutative , which means that for any vectors , .  This is shown geometrically by the parallelogram rule in .  We can also prove this algebraically. (You might want to assume that anything called addition or using the symbol is commutative, because we know that when and are real or complex numbers. But since vector addition is a new operation, we need to prove it.) The proof is that .   The parallelogram rule shows geometrically that .      Vector addition is also associative , which means that for all vectors , .  The second main vector operation is scaling. We may call real numbers scalars , since they are used to scale vectors.    Let be a scalar and a vector. The scalar multiple  is the vector .    Geometrically, scales by a factor of , and flips if .   Special cases:  , and . We define the negative of by . Then has the same length but the opposite direction of .    Let Find , and .  Algebraically, , , and . This is shown geometrically in .   Scaling in this example    \\    We can subtract a vector by adding its negative.   Vector subtraction   Let be vectors. We define vector subtraction by . So if and , then .    If and are points, then we previously introduced the position vectors and , and the vector We can now calculate that .   The complex numbers can be considered to be a set of vectors, with the operations for . To see how this fits in with our geometric definition of a vector in the plane, consider in polar form. Then the modulus is the length of the vector and the angle determines its direction. This definition of addition and scaling in the complex plane corresponds to the definitions for the Cartesian plane, after the association of with .    Comparison of vectors in and .    Vector addition in .       Vector addition in .        "
},
{
  "id": "def-sum-vec",
  "level": "2",
  "url": "sec-vector-algebra.html#def-sum-vec",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  Given two vectors and , the sum of and is .   "
},
{
  "id": "",
  "level": "2",
  "url": "sec-vector-algebra.html#",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  If and , then .   "
},
{
  "id": "fig-ttt",
  "level": "2",
  "url": "sec-vector-algebra.html#fig-ttt",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " Adding vectors tip to tail     "
},
{
  "id": "ex-add",
  "level": "2",
  "url": "sec-vector-algebra.html#ex-add",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  Let and . Algebraically, . We can also calculate this geometrically, which is done in , giving the same answer that .   , geometrically       "
},
{
  "id": "sec-vector-algebra-8",
  "level": "2",
  "url": "sec-vector-algebra.html#sec-vector-algebra-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commutative "
},
{
  "id": "sec-vector-algebra-9",
  "level": "2",
  "url": "sec-vector-algebra.html#sec-vector-algebra-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallelogram rule "
},
{
  "id": "fig-parallrule",
  "level": "2",
  "url": "sec-vector-algebra.html#fig-parallrule",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": " The parallelogram rule shows geometrically that .     "
},
{
  "id": "sec-vector-algebra-12",
  "level": "2",
  "url": "sec-vector-algebra.html#sec-vector-algebra-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "associative "
},
{
  "id": "sec-vector-algebra-13",
  "level": "2",
  "url": "sec-vector-algebra.html#sec-vector-algebra-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalars "
},
{
  "id": "def-scaling",
  "level": "2",
  "url": "sec-vector-algebra.html#def-scaling",
  "type": "Definition",
  "number": "1.2.7",
  "title": "",
  "body": "  Let be a scalar and a vector. The scalar multiple  is the vector .   "
},
{
  "id": "sec-vector-algebra-16",
  "level": "2",
  "url": "sec-vector-algebra.html#sec-vector-algebra-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Special cases: negative "
},
{
  "id": "ex-scale",
  "level": "2",
  "url": "sec-vector-algebra.html#ex-scale",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": "  Let Find , and .  Algebraically, , , and . This is shown geometrically in .   Scaling in this example    \\   "
},
{
  "id": "def-vec-subtraction",
  "level": "2",
  "url": "sec-vector-algebra.html#def-vec-subtraction",
  "type": "Definition",
  "number": "1.2.10",
  "title": "Vector subtraction.",
  "body": " Vector subtraction   Let be vectors. We define vector subtraction by . So if and , then .   "
},
{
  "id": "vectors-complex-numbers",
  "level": "2",
  "url": "sec-vector-algebra.html#vectors-complex-numbers",
  "type": "Remark",
  "number": "1.2.11",
  "title": "",
  "body": " The complex numbers can be considered to be a set of vectors, with the operations for . To see how this fits in with our geometric definition of a vector in the plane, consider in polar form. Then the modulus is the length of the vector and the angle determines its direction. This definition of addition and scaling in the complex plane corresponds to the definitions for the Cartesian plane, after the association of with .  "
},
{
  "id": "R2-and-C",
  "level": "2",
  "url": "sec-vector-algebra.html#R2-and-C",
  "type": "Figure",
  "number": "1.2.12",
  "title": "",
  "body": " Comparison of vectors in and .    Vector addition in .       Vector addition in .       "
},
{
  "id": "sec-vectors-in-Rn",
  "level": "1",
  "url": "sec-vectors-in-Rn.html",
  "type": "Section",
  "number": "1.3",
  "title": "Vectors in <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>",
  "body": " Vectors in  Vectors in are very similar to vectors in the plane, except they have components instead of 2.   Vectors in   A vector  in is an expression of the form or to save space, with components .    The definition of vector addition and scaling in is component-wise, like in . Let be a scalar, and be vectors. Then we define the sum  and the scalar multiple  .  The zero vector in is the vector having components which are all zero.  A vector in can still be interpreted as a directed line segment in -dimensional space. In , we can still draw vectors, add vectors tip to tail, and interpret scaling as scaling in -dimensional space. See for how to plot a vector in using its components. In for , we can't draw vectors. However, our algebraic methods developed for still work for , without any issues.   The vector in       We can view vectors in as real numbers: for , we consider this the same as . For example, we view the vector as the number 2.     In , let and . Then     The following fundamental properties of vectors in describes how addition, scaling, negation, and the zero vector interact. We will call this a `Theorem', which is a name in mathematics for a fact or result, usually an important one.    Let and . Then   (commutativity)    (associativity)            (distributivity)    (distributivity)        .      Properties 5 and 6 are both known as distributivity. Associativity (Property 2) allows us to write sums of several vectors without using any brackets, because no matter what order the sums are performed in, the resulting vector will be same.  Theorems are closely related to `proofs', which is a mathematical demonstration of why the fact is true. We will prove Properties 3-6 to give an indication of how to do it. The proof of the remaining properties will be left as an exercise.   Let and . Then Property 3 is proved by , Property 4 holds since and Property 5 holds since .  Finally, the following calculation . proves Property 6.   We can use these properties to simplify vector expressions.    Let . The expression is simplified by     We went through this example in detail to show how all the properties are applied. But in practice means that we can simplify vector algebra intuitively, using similar rules to algebra with numbers. So we can combine most of the steps to do it faster, for example .  So far, we know how to add and scale vectors. We will give a name to what happens when we combine addition with scaling.    A vector is a linear combination of vectors if there are scalars such that .  The scalars are called the coefficients of the linear combination.      Write as a linear combination of and . Let , i.e\\ .  Comparing components gives so . Thus . See .   From , showing          Is it possible to write as a linear combination of and ?  Suppose we try to write , so .  Comparing coefficients gives   Adding these equations gives , which is a contradiction. Therefore cannot be written as a linear combination of and . This is also shown in : since does not lie on the dashed line, it cannot be a linear combination of and .   All linear combinations of and lie on the dashed line        In both of these examples, we had to solve a system of linear equations. This can be done by scaling and elimination (subtraction). However, in , we will introduce augmented matrices which provide a better way of solving systems of linear equations.  "
},
{
  "id": "def-vectors-in-Rn",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#def-vectors-in-Rn",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Vectors in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Vectors in   A vector  in is an expression of the form or to save space, with components .   "
},
{
  "id": "sec-vectors-in-Rn-4",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#sec-vectors-in-Rn-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sum scalar multiple "
},
{
  "id": "sec-vectors-in-Rn-5",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#sec-vectors-in-Rn-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero vector "
},
{
  "id": "fig-vecR3",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#fig-vecR3",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " The vector in     "
},
{
  "id": "rem-vecs-and-reals",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#rem-vecs-and-reals",
  "type": "Remark",
  "number": "1.3.3",
  "title": "",
  "body": " We can view vectors in as real numbers: for , we consider this the same as . For example, we view the vector as the number 2.  "
},
{
  "id": "",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  In , let and . Then    "
},
{
  "id": "thm-vec-prop",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#thm-vec-prop",
  "type": "Theorem",
  "number": "1.3.5",
  "title": "",
  "body": "  Let and . Then   (commutativity)    (associativity)            (distributivity)    (distributivity)        .     "
},
{
  "id": "sec-vectors-in-Rn-14",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#sec-vectors-in-Rn-14",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": " Let and . Then Property 3 is proved by , Property 4 holds since and Property 5 holds since .  Finally, the following calculation . proves Property 6.  "
},
{
  "id": "ex-algebraic-props",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#ex-algebraic-props",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  Let . The expression is simplified by    "
},
{
  "id": "def-lincomb",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#def-lincomb",
  "type": "Definition",
  "number": "1.3.7",
  "title": "",
  "body": "  A vector is a linear combination of vectors if there are scalars such that .  The scalars are called the coefficients of the linear combination.   "
},
{
  "id": "ex-lincomb",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#ex-lincomb",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": "  Write as a linear combination of and . Let , i.e\\ .  Comparing components gives so . Thus . See .   From , showing       "
},
{
  "id": "ex-non-lc",
  "level": "2",
  "url": "sec-vectors-in-Rn.html#ex-non-lc",
  "type": "Example",
  "number": "1.3.10",
  "title": "",
  "body": "  Is it possible to write as a linear combination of and ?  Suppose we try to write , so .  Comparing coefficients gives   Adding these equations gives , which is a contradiction. Therefore cannot be written as a linear combination of and . This is also shown in : since does not lie on the dashed line, it cannot be a linear combination of and .   All linear combinations of and lie on the dashed line       "
},
{
  "id": "sec-length-of-a-vector",
  "level": "1",
  "url": "sec-length-of-a-vector.html",
  "type": "Section",
  "number": "1.4",
  "title": "Length of a vector",
  "body": " Length of a vector  When we mentioned the length of a vector earlier, we just mean its length as a line segment in space. For a vector in standard position, this is the same as its distance to the origin, which we can calculate using the usual distance formula as follows.    The length of a vector is given by .    Note that the length of a vector is nonnegative, and it is zero if and only if .  We can show that scaling a vector scales its length: for and , where is the absolute value of .   Absolute values are like lengths, and the length of a vector in is just its absolute value. In these notes, we use the notation (instead of ) for the length of a vector to emphasize the fact that we are working with vectors (instead of numbers).     The lengths of the vectors and are and .    We can scale any nonzero vector to have length .    A unit vector is a vector of length .    Let be a nonzero vector. Then its normalisation is , which is the unit vector in the same direction as . Indeed, has the same direction as since , and it is a unit vector since .    Show that is not a unit vector, and normalise .  Its length is , so is not a unit vector. Its normalisation is     In , for all , let be the vector with 1 in the th component and in every other component. The vectors are unit vectors, called the standard unit vectors in . Note that when , the standard unit vectors are and , and in , the standard unit vectors are , and .   Standard unit vectors.    In .       In .        "
},
{
  "id": "def-length",
  "level": "2",
  "url": "sec-length-of-a-vector.html#def-length",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  The length of a vector is given by .   "
},
{
  "id": "rem-length-and-abs-value",
  "level": "2",
  "url": "sec-length-of-a-vector.html#rem-length-and-abs-value",
  "type": "Remark",
  "number": "1.4.2",
  "title": "",
  "body": " Absolute values are like lengths, and the length of a vector in is just its absolute value. In these notes, we use the notation (instead of ) for the length of a vector to emphasize the fact that we are working with vectors (instead of numbers).  "
},
{
  "id": "ex-lengths",
  "level": "2",
  "url": "sec-length-of-a-vector.html#ex-lengths",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  The lengths of the vectors and are and .   "
},
{
  "id": "def-unit-vector",
  "level": "2",
  "url": "sec-length-of-a-vector.html#def-unit-vector",
  "type": "Definition",
  "number": "1.4.4",
  "title": "",
  "body": "  A unit vector is a vector of length .   "
},
{
  "id": "sec-length-of-a-vector-10",
  "level": "2",
  "url": "sec-length-of-a-vector.html#sec-length-of-a-vector-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normalisation "
},
{
  "id": "ex-normalising",
  "level": "2",
  "url": "sec-length-of-a-vector.html#ex-normalising",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Show that is not a unit vector, and normalise .  Its length is , so is not a unit vector. Its normalisation is    "
},
{
  "id": "sec-length-of-a-vector-12",
  "level": "2",
  "url": "sec-length-of-a-vector.html#sec-length-of-a-vector-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard unit vectors "
},
{
  "id": "standard-unit-vectors",
  "level": "2",
  "url": "sec-length-of-a-vector.html#standard-unit-vectors",
  "type": "Figure",
  "number": "1.4.6",
  "title": "",
  "body": " Standard unit vectors.    In .       In .       "
},
{
  "id": "sec-vector-spaces",
  "level": "1",
  "url": "sec-vector-spaces.html",
  "type": "Section",
  "number": "1.5",
  "title": "Vector Spaces",
  "body": " Vector Spaces  In we identified eight properties satisfied by vector addition and scalar multiplication on . It turns out that these properties are exactly what is needed to produce the more general notion of a vector space.    A vector space over is a set together with   an operation satisfying     a scalar multiplication of satisfying     a vector     for each a vector    satisfying, for all and ,   (commutativity)    (associativity)            (distributivity)    (distributivity)        .        We call the operation addition . When addition satisfies (the first dot point above), we say that  is closed under addition . Similarly, when the scalar multiplication operation satisfies , we say that is closed under scalar multiplication .  The vector is called a zero vector , and given , the vector is called an additive inverse of  . (In the first tutorial you will be asked to show that the zero vector and the additive inverses are unique.)      We have not given the most general definition of a vector space. To do this, we would need to replace the real numbers by a more general mathematical object called a field . You will learn more about fields in second-year mathematics.      By we know that under the usual addition and scalar multiplication operations is a vector space.      Here are some other examples of vector spaces. We will leave the proofs as an exercise (some of which are difficult!).   The set of all functions under the usual pointwise addition and scalar multiplication operations is a vector space over .    The sets are all vector spaces over under the usual pointwise operations.   We will later see that the set of with real entries is a vector space over under the usual operations of matrix addition and scalar multiplication.      "
},
{
  "id": "def-vec-spaces",
  "level": "2",
  "url": "sec-vector-spaces.html#def-vec-spaces",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "  A vector space over is a set together with   an operation satisfying     a scalar multiplication of satisfying     a vector     for each a vector    satisfying, for all and ,   (commutativity)    (associativity)            (distributivity)    (distributivity)        .     "
},
{
  "id": "rem-vec-space-terms",
  "level": "2",
  "url": "sec-vector-spaces.html#rem-vec-space-terms",
  "type": "Remark",
  "number": "1.5.2",
  "title": "",
  "body": "  We call the operation addition . When addition satisfies (the first dot point above), we say that  is closed under addition . Similarly, when the scalar multiplication operation satisfies , we say that is closed under scalar multiplication .  The vector is called a zero vector , and given , the vector is called an additive inverse of  . (In the first tutorial you will be asked to show that the zero vector and the additive inverses are unique.)   "
},
{
  "id": "rem-general-vec-space",
  "level": "2",
  "url": "sec-vector-spaces.html#rem-general-vec-space",
  "type": "Remark",
  "number": "1.5.3",
  "title": "",
  "body": "  We have not given the most general definition of a vector space. To do this, we would need to replace the real numbers by a more general mathematical object called a field . You will learn more about fields in second-year mathematics.   "
},
{
  "id": "ex-Rn-is-vec-space",
  "level": "2",
  "url": "sec-vector-spaces.html#ex-Rn-is-vec-space",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": "  By we know that under the usual addition and scalar multiplication operations is a vector space.   "
},
{
  "id": "ex-other-vec-spaces",
  "level": "2",
  "url": "sec-vector-spaces.html#ex-other-vec-spaces",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": "  Here are some other examples of vector spaces. We will leave the proofs as an exercise (some of which are difficult!).   The set of all functions under the usual pointwise addition and scalar multiplication operations is a vector space over .    The sets are all vector spaces over under the usual pointwise operations.   We will later see that the set of with real entries is a vector space over under the usual operations of matrix addition and scalar multiplication.     "
},
{
  "id": "sec-dot-products",
  "level": "1",
  "url": "sec-dot-products.html",
  "type": "Section",
  "number": "2.1",
  "title": "Dot products",
  "body": " Dot products    The dot product of the vectors and is the scalar .    It is important not to leave out the dot when writing the dot product, to distinguish this from the cross product which will be introduced later. For example, if and , then . If and , then .  The dot product has the following properties.    Let , and . Then   (commutativity)    (distributivity)        , with equality if and only if (positive-definiteness)        (Cauchy--Schwarz inequality)    (triangle inequality)      We prove Properties 4-7.   Let . Observe that . We see that this is the square of , proving Property 5, and it is a sum of squared real numbers. Therefore , and it equals zero if and only if , i.e. if and only if , proving Property 4.  Now consider Property 6. If or , then both sides are zero and the inequality is true. Therefore, suppose one of them is nonzero, say . We first calculate that .  Applying this with , we get .  Therefore , which rearranges to give . Taking square roots, , which proves the Cauchy--Schwarz inequality.  For Property 7, both sides of the inequality are nonnegative, so it is equivalent to show that . Taking in the first calculation during the proof of Property 6, we get , where in the second-last line we used the Cauchy--Schwarz inequality. This proves the triangle inequality.   Geometrically, consider the triangle formed by the vectors and . Because the length of any side of a triangle is less than or equal to the sum of the the other lengths, we have . This explains the name of the inequality.   The triangle inequality      "
},
{
  "id": "",
  "level": "2",
  "url": "sec-dot-products.html#",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  The dot product of the vectors and is the scalar .   "
},
{
  "id": "thm-props-dot-product",
  "level": "2",
  "url": "sec-dot-products.html#thm-props-dot-product",
  "type": "Theorem",
  "number": "2.1.2",
  "title": "",
  "body": "  Let , and . Then   (commutativity)    (distributivity)        , with equality if and only if (positive-definiteness)        (Cauchy--Schwarz inequality)    (triangle inequality)     "
},
{
  "id": "sec-dot-products-7",
  "level": "2",
  "url": "sec-dot-products.html#sec-dot-products-7",
  "type": "Proof",
  "number": "2.1.1",
  "title": "",
  "body": " Let . Observe that . We see that this is the square of , proving Property 5, and it is a sum of squared real numbers. Therefore , and it equals zero if and only if , i.e. if and only if , proving Property 4.  Now consider Property 6. If or , then both sides are zero and the inequality is true. Therefore, suppose one of them is nonzero, say . We first calculate that .  Applying this with , we get .  Therefore , which rearranges to give . Taking square roots, , which proves the Cauchy--Schwarz inequality.  For Property 7, both sides of the inequality are nonnegative, so it is equivalent to show that . Taking in the first calculation during the proof of Property 6, we get , where in the second-last line we used the Cauchy--Schwarz inequality. This proves the triangle inequality.  "
},
{
  "id": "triangle-inequality",
  "level": "2",
  "url": "sec-dot-products.html#triangle-inequality",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": " The triangle inequality     "
},
{
  "id": "sec-angle-between-vectors",
  "level": "1",
  "url": "sec-angle-between-vectors.html",
  "type": "Section",
  "number": "2.2",
  "title": "Angle between vectors",
  "body": " Angle between vectors  There is also a geometric formula for the dot product, which shows how the dot product of two vectors is related to the angle between them.   The angle between two vectors        Let , and be the angle between them. Then .     By the cosine rule (see ), . Meanwhile, using Property 5 of the dot product, . Subtracting these formulas, we get .    We can combine the geometric formula for the dot product with the fact that , to get . Similarly, Therefore . This provides another proof of and a geometric interpretation of the Cauchy--Schwarz inequality. There are two reasons that we presented the first, more complicated-seeming proof of the Cauchy--Schwarz: part of that proof is used for the proof of the triangle inequality, and it gives a purely algebraic proof (without relying on properties of the function).     Two vectors are orthogonal if .    Orthogonal vectors are perpendicular, since, if is the angle between two nonzero vectors , then gives .    Determine whether the angle between and is acute, obtuse, or a right angle.  We have so is acute. In fact, .      Find such that and are orthogonal.  If , then which factorises to give . Therefore, or .    "
},
{
  "id": "fig-angle",
  "level": "2",
  "url": "sec-angle-between-vectors.html#fig-angle",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " The angle between two vectors     "
},
{
  "id": "thm-geo-form-dot-product",
  "level": "2",
  "url": "sec-angle-between-vectors.html#thm-geo-form-dot-product",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "",
  "body": "  Let , and be the angle between them. Then .   "
},
{
  "id": "sec-angle-between-vectors-5",
  "level": "2",
  "url": "sec-angle-between-vectors.html#sec-angle-between-vectors-5",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " By the cosine rule (see ), . Meanwhile, using Property 5 of the dot product, . Subtracting these formulas, we get .  "
},
{
  "id": "rem-CS-proof-alt",
  "level": "2",
  "url": "sec-angle-between-vectors.html#rem-CS-proof-alt",
  "type": "Remark",
  "number": "2.2.3",
  "title": "",
  "body": " We can combine the geometric formula for the dot product with the fact that , to get . Similarly, Therefore . This provides another proof of and a geometric interpretation of the Cauchy--Schwarz inequality. There are two reasons that we presented the first, more complicated-seeming proof of the Cauchy--Schwarz: part of that proof is used for the proof of the triangle inequality, and it gives a purely algebraic proof (without relying on properties of the function).  "
},
{
  "id": "def-orthogonal",
  "level": "2",
  "url": "sec-angle-between-vectors.html#def-orthogonal",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  Two vectors are orthogonal if .   "
},
{
  "id": "ex-angle-vecs",
  "level": "2",
  "url": "sec-angle-between-vectors.html#ex-angle-vecs",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "  Determine whether the angle between and is acute, obtuse, or a right angle.  We have so is acute. In fact, .   "
},
{
  "id": "ex-orthogonal-vecs",
  "level": "2",
  "url": "sec-angle-between-vectors.html#ex-orthogonal-vecs",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": "  Find such that and are orthogonal.  If , then which factorises to give . Therefore, or .   "
},
{
  "id": "sec-projections",
  "level": "1",
  "url": "sec-projections.html",
  "type": "Section",
  "number": "2.3",
  "title": "Projections",
  "body": " Projections  Given a point and a line in the plane, the distance between them is found by going from to via the shortest path, which is a line segment that intersects perpendicularly.  We can precisely calculate this using vectors. We use the following setup, which is shown in . Let be any point on the line , be a vector parallel to , and be the point on such that is orthogonal to . Let . Then we want to calculate the length of , since this will give the distance from to . First we calculate .   The set up for computing the shortest distance      For simplicity, let's first assume that is in the direction of , like in the figure (this makes sure isn't in the opposite direction to ). Due to this assumption, we can normalize and multiply by to get to . This is the first step in the following calculation: , where we have also used trigonometry and the geometric formula for the dot product. Now we can recognise that this formula applies for any vector parallel to : if is in the opposite direction to , then is in the same direction, so we can apply the previous calculation to see that like before, since all the minus signs cancel.  The vector is important because it is the vector obtained by `projecting' onto the direction of . Intuitively speaking, this calculates the `component' of in the direction of .    Let with . The projection of onto is the vector    Going back to our problem, using geometric vector addition, we have . So , so the distance is . We summarise this calculation as a theorem.    In the plane, let be a point, be a line, and a nonzero vector parallel to . Then the distance from to is , where and is any point on .      The projection of onto is       Find the projections of onto and onto . We have . This is illustrated by . For ,      The projection of onto is      In general, the projection of a vector onto the standard unit vector equals .  The formula in has the advantage that it can be understood using only the properties of vector addition and the dot product that we have already seen in this unit. However, there is an another formula using coordinates that is quicker for calculations.  It is a fact (which will be explained in ) that if the line has equation , then is a normal vector for , which means it is orthogonal to . The distance from to the point on is , as shown in .   The distance from to is the same as the length of .      This simplifies to . Using coordinates, let be a point on , and write . Then , so we calculate , where we used the equation for in the last step. Therefore the shortest distance from to the line is .  "
},
{
  "id": "fig-proj_setup",
  "level": "2",
  "url": "sec-projections.html#fig-proj_setup",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " The set up for computing the shortest distance     "
},
{
  "id": "def-projection",
  "level": "2",
  "url": "sec-projections.html#def-projection",
  "type": "Definition",
  "number": "2.3.2",
  "title": "",
  "body": "  Let with . The projection of onto is the vector   "
},
{
  "id": "thm-distproj",
  "level": "2",
  "url": "sec-projections.html#thm-distproj",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": "  In the plane, let be a point, be a line, and a nonzero vector parallel to . Then the distance from to is , where and is any point on .   "
},
{
  "id": "ex-projection",
  "level": "2",
  "url": "sec-projections.html#ex-projection",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": "  The projection of onto is    "
},
{
  "id": "ex-more-projections",
  "level": "2",
  "url": "sec-projections.html#ex-more-projections",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": "  Find the projections of onto and onto . We have . This is illustrated by . For ,    "
},
{
  "id": "fig-proje1",
  "level": "2",
  "url": "sec-projections.html#fig-proje1",
  "type": "Figure",
  "number": "2.3.6",
  "title": "",
  "body": " The projection of onto is     "
},
{
  "id": "fig-proj_setup2",
  "level": "2",
  "url": "sec-projections.html#fig-proj_setup2",
  "type": "Figure",
  "number": "2.3.7",
  "title": "",
  "body": " The distance from to is the same as the length of .     "
},
{
  "id": "sec-cross-products",
  "level": "1",
  "url": "sec-cross-products.html",
  "type": "Section",
  "number": "3.1",
  "title": "Cross products",
  "body": " Cross products  The cross product is another operation on vectors. It is only defined for vectors in , and its output is another vector in .    The cross product of the vectors is the vector .    To help remember the formula, we can use the array method ( ). It involves 3 pairs of lines, one for each component of the resulting vector. Starting at , multiply the components connected by the solid line, then subtract the product of the components connected by the dashed line. For example, the first component is and so on for the rest.   Diagram for the array method      Alternatively, to notice the `criss-cross' pattern it helps to write the vectors using columns: .  Here are three examples which also showcase properties of the cross product.    If and , then and . Notice that .     Array method for from        Find and for and . From the previous example, we know . So        If , then    The next theorem lists the main properties of the cross product.    Let and . Then   (anti-commutativity)                (left distributivity)    (right distributivity)    .       Property 2 says that is orthogonal to and . We will prove Properties 2, 3, and 5.   Let and . Property 2 holds since the calculation that is similar. We can deduce Property 3 from Property 1 by observing that so . Finally, the proof of Property 5 is that    Importantly, the cross product is not associative! This means that, for , . For example, if , then while .    Simplify using the properties in the theorem.     Recall that is orthogonal to both and . If and are not parallel, then the set of linear combinations of and is a plane in . The cross product must be orthogonal to this plane, so there are only two choices for its direction. This is show in : the two orthogonal vectors are the upwards normal vector and the downwards normal vector, drawn in red.    There are two vectors which are orthogonal to the plane given by and      The direction of is given by the right hand rule.   Right-hand rule:    Point the fingers of your right hand straight in the direction of .    Curl fingers towards the direction of .    Your thumb points in the direction of .      The right hand rule    Now we know the direction of . Next, we want to calculate its magnitude (length). First, it will help to have the following fact (we leave the proof as an exercise).   Let . Then .   Now we can calculate the length of a cross product.    Let , and be the angle between and such that . Then .    By the boxed fact above and the geometric formula for the dot product, . Since , we have , and so taking square roots gives the result.      Suppose are such that , and . Find . We first calculate that . Then , so . (We used the positive square root since ). Finally,     "
},
{
  "id": "def-cross-product",
  "level": "2",
  "url": "sec-cross-products.html#def-cross-product",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  The cross product of the vectors is the vector .   "
},
{
  "id": "fig-braid",
  "level": "2",
  "url": "sec-cross-products.html#fig-braid",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " Diagram for the array method     "
},
{
  "id": "ex-cross",
  "level": "2",
  "url": "sec-cross-products.html#ex-cross",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  If and , then and . Notice that .   "
},
{
  "id": "fig-braid_ex",
  "level": "2",
  "url": "sec-cross-products.html#fig-braid_ex",
  "type": "Figure",
  "number": "3.1.4",
  "title": "",
  "body": " Array method for from     "
},
{
  "id": "ex-dot-and-cross",
  "level": "2",
  "url": "sec-cross-products.html#ex-dot-and-cross",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "  Find and for and . From the previous example, we know . So     "
},
{
  "id": "ex-uxuiszero",
  "level": "2",
  "url": "sec-cross-products.html#ex-uxuiszero",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "  If , then   "
},
{
  "id": "thm-cross-product-props",
  "level": "2",
  "url": "sec-cross-products.html#thm-cross-product-props",
  "type": "Theorem",
  "number": "3.1.7",
  "title": "",
  "body": "  Let and . Then   (anti-commutativity)                (left distributivity)    (right distributivity)    .      "
},
{
  "id": "sec-cross-products-15",
  "level": "2",
  "url": "sec-cross-products.html#sec-cross-products-15",
  "type": "Proof",
  "number": "3.1.1",
  "title": "",
  "body": " Let and . Property 2 holds since the calculation that is similar. We can deduce Property 3 from Property 1 by observing that so . Finally, the proof of Property 5 is that   "
},
{
  "id": "ex-cross-product-algebra",
  "level": "2",
  "url": "sec-cross-products.html#ex-cross-product-algebra",
  "type": "Example",
  "number": "3.1.8",
  "title": "",
  "body": "  Simplify using the properties in the theorem.    "
},
{
  "id": "fig-plane_normals",
  "level": "2",
  "url": "sec-cross-products.html#fig-plane_normals",
  "type": "Figure",
  "number": "3.1.9",
  "title": "",
  "body": " There are two vectors which are orthogonal to the plane given by and     "
},
{
  "id": "fig-rhr",
  "level": "2",
  "url": "sec-cross-products.html#fig-rhr",
  "type": "Figure",
  "number": "3.1.10",
  "title": "",
  "body": " The right hand rule   "
},
{
  "id": "Thm-lengpara",
  "level": "2",
  "url": "sec-cross-products.html#Thm-lengpara",
  "type": "Theorem",
  "number": "3.1.11",
  "title": "",
  "body": "  Let , and be the angle between and such that . Then .    By the boxed fact above and the geometric formula for the dot product, . Since , we have , and so taking square roots gives the result.   "
},
{
  "id": "ex-length-of-cross",
  "level": "2",
  "url": "sec-cross-products.html#ex-length-of-cross",
  "type": "Example",
  "number": "3.1.12",
  "title": "",
  "body": "  Suppose are such that , and . Find . We first calculate that . Then , so . (We used the positive square root since ). Finally,    "
},
{
  "id": "sec-geo-apps-of-cross-products",
  "level": "1",
  "url": "sec-geo-apps-of-cross-products.html",
  "type": "Section",
  "number": "3.2",
  "title": "Geometric applications of cross products",
  "body": " Geometric applications of cross products  The formula has a geometric interpretation. From trigonometry, we know that if and are two side lengths of a triangle, and is the angle between these sides, then the area of the triangle is . Therefore we can deduce the following corollary, which is illustrated in .    Let . Then is the area of the parallelogram inscribed by and , and is the area of the triangle inscribed by and .     The area of this parallelogram is , which is twice the area of the triangles.      Calculate the area of the triangle formed by the points , , . We have . Thus , which has length . So the area of the triangle is       Three vectors inscribe a parallelopiped , as is illustarted in . The volume of this shape is given by . The term is called the scalar triple product of .     The normal form of a line    "
},
{
  "id": "cor-area-of-parallelogram",
  "level": "2",
  "url": "sec-geo-apps-of-cross-products.html#cor-area-of-parallelogram",
  "type": "Corollary",
  "number": "3.2.1",
  "title": "",
  "body": "  Let . Then is the area of the parallelogram inscribed by and , and is the area of the triangle inscribed by and .   "
},
{
  "id": "fig-cross_area",
  "level": "2",
  "url": "sec-geo-apps-of-cross-products.html#fig-cross_area",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " The area of this parallelogram is , which is twice the area of the triangles.   "
},
{
  "id": "ex-area-of-triangle",
  "level": "2",
  "url": "sec-geo-apps-of-cross-products.html#ex-area-of-triangle",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Calculate the area of the triangle formed by the points , , . We have . Thus , which has length . So the area of the triangle is    "
},
{
  "id": "rem-parallelopiped",
  "level": "2",
  "url": "sec-geo-apps-of-cross-products.html#rem-parallelopiped",
  "type": "Remark",
  "number": "3.2.4",
  "title": "",
  "body": "  Three vectors inscribe a parallelopiped , as is illustarted in . The volume of this shape is given by . The term is called the scalar triple product of .   "
},
{
  "id": "fig-parallelopiped",
  "level": "2",
  "url": "sec-geo-apps-of-cross-products.html#fig-parallelopiped",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " The normal form of a line   "
},
{
  "id": "sec-lines-in-R2",
  "level": "1",
  "url": "sec-lines-in-R2.html",
  "type": "Section",
  "number": "4.1",
  "title": "Lines in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>",
  "body": " Lines in    Let be a line in . A normal vector for is a nonzero vector which is orthogonal to .    A normal vector and one point on is enough to completely determine the line , which we will show by writing the equation for in terms of these two objects. Notice that unlike for vectors, the position of in space matters, which is why we need a point .  Fix , and let be any point. Let and , as shown in .   The normal form of a line      We have (The symbol stands for `if and only if'.) We also have , so . This means that is an equation for . The next definition summarises this calculation and gives the equation a name.    The normal form of the equation of a line in is or equivalently where is a normal vector for , and is the position vector of a point on .    You may be more familiar from high school with equations for lines looking like or . We can rearrange the normal form to look like this. Suppose and , so . Then becomes which is , or where .    The general form of the equation of a line in is where is a normal vector for and , where is the position vector of a point on .      The line with general equation has a normal vector , by looking at its coefficients. Any nonzero scalar multiple of would also be a normal vector to the line.      Find the normal and general forms of the equation of a line through and perpendicular to the vector . We take and , so . We have so the normal form is , which simplifies to and the general form is .    Notice that if we had picked a different normal vector and a different point on the same line, the normal and general forms would look different, although they would still describe the same line.   We will now present a different approach to finding an equation for a line in . It still involves a point and a direction. The difference is that now we will use a vector parallel to the line, instead of a vector normal to the line.    A direction vector for a line in is a nonzero vector which is parallel to .    Given a direction vector for a line and a point with position vector , we can write down an equation for . Let be any point with position vector . Then , for some . We have , so . This is summarised in the next definition.    The vector form of the equation of a line in which passes through a point with position vector , and is parallel to a vector , is where is called a parameter .    The fourth and final form of the equation of a line in comes from expanding the vector form into its components. Suppose , , and . Then we have . Comparing components gives .    The parametric equations of a line in which passes through a point with position vector , and is parallel to the vector , are .     Summary: A line in is described by a point and a direction. If we use a normal vector to , then the equation is called a normal form when written using vectors, and general form when written in components. If we use a direction vector instead, the equation is called a vector form when written using vectors, and when written in components we call them parametric equations.  To finish this section, we give a few examples and final comments. To find a direction vector for a line , find two points and on . Then is a direction vector for . This is illustrated in .   The vector between two (distinct) points on is a direction vector        Find the vector form and parametric equations for the line through the points and . We can take . So a vector form is and parametric equations are     Like with the normal and general form, the expression of these equations is not unique.   Since a normal vector for a line in is orthogonal, while a direction vector is parallel, this means . This observation can help us find if we know , or to find if we know . This is shown in the next two examples.    Find a direction vector for the line with normal form .  A normal vector is . Let . We must have so . Choosing , a direction vector is .      Find a normal vector for the line with parametric equations . A direction vector is , so is a normal vector, since     "
},
{
  "id": "def-normal-vector",
  "level": "2",
  "url": "sec-lines-in-R2.html#def-normal-vector",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  Let be a line in . A normal vector for is a nonzero vector which is orthogonal to .   "
},
{
  "id": "fig-normal",
  "level": "2",
  "url": "sec-lines-in-R2.html#fig-normal",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " The normal form of a line     "
},
{
  "id": "def-normal-form",
  "level": "2",
  "url": "sec-lines-in-R2.html#def-normal-form",
  "type": "Definition",
  "number": "4.1.3",
  "title": "",
  "body": "  The normal form of the equation of a line in is or equivalently where is a normal vector for , and is the position vector of a point on .   "
},
{
  "id": "def-general-form",
  "level": "2",
  "url": "sec-lines-in-R2.html#def-general-form",
  "type": "Definition",
  "number": "4.1.4",
  "title": "",
  "body": "  The general form of the equation of a line in is where is a normal vector for and , where is the position vector of a point on .   "
},
{
  "id": "ex-normal-form",
  "level": "2",
  "url": "sec-lines-in-R2.html#ex-normal-form",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "  The line with general equation has a normal vector , by looking at its coefficients. Any nonzero scalar multiple of would also be a normal vector to the line.   "
},
{
  "id": "ex-normal-and-general-form",
  "level": "2",
  "url": "sec-lines-in-R2.html#ex-normal-and-general-form",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "  Find the normal and general forms of the equation of a line through and perpendicular to the vector . We take and , so . We have so the normal form is , which simplifies to and the general form is .   "
},
{
  "id": "def-direction-vector",
  "level": "2",
  "url": "sec-lines-in-R2.html#def-direction-vector",
  "type": "Definition",
  "number": "4.1.7",
  "title": "",
  "body": "  A direction vector for a line in is a nonzero vector which is parallel to .   "
},
{
  "id": "def-vector-form",
  "level": "2",
  "url": "sec-lines-in-R2.html#def-vector-form",
  "type": "Definition",
  "number": "4.1.8",
  "title": "",
  "body": "  The vector form of the equation of a line in which passes through a point with position vector , and is parallel to a vector , is where is called a parameter .   "
},
{
  "id": "def-parametric-eqs",
  "level": "2",
  "url": "sec-lines-in-R2.html#def-parametric-eqs",
  "type": "Definition",
  "number": "4.1.9",
  "title": "",
  "body": "  The parametric equations of a line in which passes through a point with position vector , and is parallel to the vector , are .   "
},
{
  "id": "sec-lines-in-R2-19",
  "level": "2",
  "url": "sec-lines-in-R2.html#sec-lines-in-R2-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Summary: "
},
{
  "id": "fig-finding_d",
  "level": "2",
  "url": "sec-lines-in-R2.html#fig-finding_d",
  "type": "Figure",
  "number": "4.1.10",
  "title": "",
  "body": " The vector between two (distinct) points on is a direction vector     "
},
{
  "id": "ex-vector-and-para-forms",
  "level": "2",
  "url": "sec-lines-in-R2.html#ex-vector-and-para-forms",
  "type": "Example",
  "number": "4.1.11",
  "title": "",
  "body": "  Find the vector form and parametric equations for the line through the points and . We can take . So a vector form is and parametric equations are    "
},
{
  "id": "ex-dir-vector",
  "level": "2",
  "url": "sec-lines-in-R2.html#ex-dir-vector",
  "type": "Example",
  "number": "4.1.12",
  "title": "",
  "body": "  Find a direction vector for the line with normal form .  A normal vector is . Let . We must have so . Choosing , a direction vector is .   "
},
{
  "id": "ex-finding-normal-vector",
  "level": "2",
  "url": "sec-lines-in-R2.html#ex-finding-normal-vector",
  "type": "Example",
  "number": "4.1.13",
  "title": "",
  "body": "  Find a normal vector for the line with parametric equations . A direction vector is , so is a normal vector, since    "
},
{
  "id": "sec-lines-in-R3-and-Rn",
  "level": "1",
  "url": "sec-lines-in-R3-and-Rn.html",
  "type": "Section",
  "number": "4.2",
  "title": "Lines in <span class=\"process-math\">\\(\\mathbb{R}^3\\)<\/span> and <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>",
  "body": " Lines in and  In , the vector form and parametric equations for a line look very similar to in . The only difference is that we have 3 components now instead of 2. If you look closely, in the calculation where we derived the vector form of a line in , we only used general facts about vectors and about being parallel, and never used any properties specific to . Therefore that calculation works for as well.    Consider a line in that passes through a point and has direction vector . The vector form of the equation for is where and , and the parametric equations for are .      Find the vector form for the line that passes through the points and . We take and , so the vector form is      Lines in do not have normal forms or general forms. We will see in the next section that in , a normal vector and a point describe a plane instead.   We can generalise vector forms and parametric equations to lines in .    The equation is the vector form of a line in . It has parametric equations     In , the are only 3 possibilities for how lines intersect: they either coincide (are the same line), intersect at a single point, or are parallel without intersecting, as shown in . In , there is another possibility, which is called being skew.    Two lines in are called skew if they do not intersect and are not parallel.     Classification of intersections of lines in    Coinciding.       Single intersection.       No intersection.          Show that the lines with the following vector forms are not skew: . Substituting into the vector form for gives . Substituting into the vector form for gives . Therefore the lines intersect at , so they are not skew.      Determine whether the lines with the following vector forms are skew . The lines are not parallel since the direction vectors and are not parallel. To determine whether the lines intersect, we try to equate their parametric equations: which rearranges to give . Solving the first two equations gives , but substituting this into the third equation gives . Therefore this system of equations has no solutions, so the lines do not intersect. Therefore and are skew.    "
},
{
  "id": "def-vec-and-para-in-R3",
  "level": "2",
  "url": "sec-lines-in-R3-and-Rn.html#def-vec-and-para-in-R3",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  Consider a line in that passes through a point and has direction vector . The vector form of the equation for is where and , and the parametric equations for are .   "
},
{
  "id": "ex-vec-form-in-R3",
  "level": "2",
  "url": "sec-lines-in-R3-and-Rn.html#ex-vec-form-in-R3",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Find the vector form for the line that passes through the points and . We take and , so the vector form is    "
},
{
  "id": "rem-no-gen-form-in-R3",
  "level": "2",
  "url": "sec-lines-in-R3-and-Rn.html#rem-no-gen-form-in-R3",
  "type": "Remark",
  "number": "4.2.3",
  "title": "",
  "body": " Lines in do not have normal forms or general forms. We will see in the next section that in , a normal vector and a point describe a plane instead.  "
},
{
  "id": "ex-para-eqs-in-R3",
  "level": "2",
  "url": "sec-lines-in-R3-and-Rn.html#ex-para-eqs-in-R3",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  The equation is the vector form of a line in . It has parametric equations    "
},
{
  "id": "def-skew-lines",
  "level": "2",
  "url": "sec-lines-in-R3-and-Rn.html#def-skew-lines",
  "type": "Definition",
  "number": "4.2.5",
  "title": "",
  "body": "  Two lines in are called skew if they do not intersect and are not parallel.   "
},
{
  "id": "fig-R2_int",
  "level": "2",
  "url": "sec-lines-in-R3-and-Rn.html#fig-R2_int",
  "type": "Figure",
  "number": "4.2.6",
  "title": "",
  "body": " Classification of intersections of lines in    Coinciding.       Single intersection.       No intersection.       "
},
{
  "id": "ex-not-skew",
  "level": "2",
  "url": "sec-lines-in-R3-and-Rn.html#ex-not-skew",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "  Show that the lines with the following vector forms are not skew: . Substituting into the vector form for gives . Substituting into the vector form for gives . Therefore the lines intersect at , so they are not skew.   "
},
{
  "id": "ex-determining-skew",
  "level": "2",
  "url": "sec-lines-in-R3-and-Rn.html#ex-determining-skew",
  "type": "Example",
  "number": "4.2.8",
  "title": "",
  "body": "  Determine whether the lines with the following vector forms are skew . The lines are not parallel since the direction vectors and are not parallel. To determine whether the lines intersect, we try to equate their parametric equations: which rearranges to give . Solving the first two equations gives , but substituting this into the third equation gives . Therefore this system of equations has no solutions, so the lines do not intersect. Therefore and are skew.   "
},
{
  "id": "sec-planes",
  "level": "1",
  "url": "sec-planes.html",
  "type": "Section",
  "number": "4.3",
  "title": "Planes",
  "body": " Planes  Let . We will investigate what the `normal form' geometrically represents in . Consider the equation . This means that, for a fixed position vector , we want to find all the vectors that are orthogonal to the `normal vector' . The solutions to this describe a plane, as shown in .   Normal form of a plane        Let be a plane in . A normal vector for is a nonzero vector which is orthogonal to .      The normal form of the equation of a plane in is or equivalently where is a normal vector for , and is the position vector of a point on .    If we know and , so , and if we write so , then evaluating the dot products in the general form gives the equation where .    The general form of the equation of a plane in is where is a normal vector for , and , where is the position vector of a point on .      Find a normal form for the plane with general equation . A normal vector is . A point on the plane is , so . So the normal form is       Find a normal form and general form for the plane that passes through the point and has normal vector .  We take and , so . The normal form is and the general form is .     In , the intersection of a plane with a line can consist of zero points, one point, or infinitely many points if the line lies on the plane.     Determine whether the line intersects the plane , and if so, find the intersection.  The parametric equations of the line are . Substituting this into the equation of the plane gives , so . Substituting into the parametric equations of the line gives so there is one intersection point at .    We can also describe planes using direction vectors.    A direction vector for a plane in is a nonzero vector which is parallel to .    We have previously seen that a line is specified by a point and one direction vector. In fact, a plane is determined by a point on , and two non-parallel direction vectors and . (This should make sense, because intuitively a line is one dimensional, while a plane is two-dimensional, so it should have two `directions'.) From this fact, we will deduce an equation for . Let be an arbitrary point of . Then lies on , so there are such that . Let and , so . Then , for . Thus . This is shown in .   Vector form of a plane      In components, let , , and . Then we have . Comparing coefficients gives . The next definition summarises these calculations.    The vector form of a plane is and parametric equations for are where is the position vector of a point on , and , are non-parallel direction vectors for .     The reason that we require the direction vectors and for a plane to be non-parallel is because if they are parallel, then for some , so which is the equation of a line in .   Given any 3 non-collinear (not all on a single line) points on a plane , we can find equations for in any of the four forms. We can take and to be direction vectors to find the vector form and parametric equations for . The vectors and are non-parallel since are non-collinear. Since is orthogonal to and , we can take as a normal vector to find the normal form and general form for .    Find the vector form, parametric equations, normal form and general form for the plane containing the points , and .  We can take . The vector form is and the parametric equations are . We can take . Therefore the normal form is and the general form is .    "
},
{
  "id": "fig-plane_setup",
  "level": "2",
  "url": "sec-planes.html#fig-plane_setup",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": " Normal form of a plane     "
},
{
  "id": "def-normal-to-a-plane",
  "level": "2",
  "url": "sec-planes.html#def-normal-to-a-plane",
  "type": "Definition",
  "number": "4.3.2",
  "title": "",
  "body": "  Let be a plane in . A normal vector for is a nonzero vector which is orthogonal to .   "
},
{
  "id": "def-normal-form-of-plane",
  "level": "2",
  "url": "sec-planes.html#def-normal-form-of-plane",
  "type": "Definition",
  "number": "4.3.3",
  "title": "",
  "body": "  The normal form of the equation of a plane in is or equivalently where is a normal vector for , and is the position vector of a point on .   "
},
{
  "id": "def-general-form-of-plane",
  "level": "2",
  "url": "sec-planes.html#def-general-form-of-plane",
  "type": "Definition",
  "number": "4.3.4",
  "title": "",
  "body": "  The general form of the equation of a plane in is where is a normal vector for , and , where is the position vector of a point on .   "
},
{
  "id": "ex-norm-form-plane",
  "level": "2",
  "url": "sec-planes.html#ex-norm-form-plane",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": "  Find a normal form for the plane with general equation . A normal vector is . A point on the plane is , so . So the normal form is    "
},
{
  "id": "ex-norm-and-general-plane",
  "level": "2",
  "url": "sec-planes.html#ex-norm-and-general-plane",
  "type": "Example",
  "number": "4.3.6",
  "title": "",
  "body": "  Find a normal form and general form for the plane that passes through the point and has normal vector .  We take and , so . The normal form is and the general form is .   "
},
{
  "id": "rem-int-plane-line",
  "level": "2",
  "url": "sec-planes.html#rem-int-plane-line",
  "type": "Remark",
  "number": "4.3.7",
  "title": "",
  "body": " In , the intersection of a plane with a line can consist of zero points, one point, or infinitely many points if the line lies on the plane.  "
},
{
  "id": "ex-int-line-plane",
  "level": "2",
  "url": "sec-planes.html#ex-int-line-plane",
  "type": "Example",
  "number": "4.3.8",
  "title": "",
  "body": "  Determine whether the line intersects the plane , and if so, find the intersection.  The parametric equations of the line are . Substituting this into the equation of the plane gives , so . Substituting into the parametric equations of the line gives so there is one intersection point at .   "
},
{
  "id": "def-direction-vec-plane",
  "level": "2",
  "url": "sec-planes.html#def-direction-vec-plane",
  "type": "Definition",
  "number": "4.3.9",
  "title": "",
  "body": "  A direction vector for a plane in is a nonzero vector which is parallel to .   "
},
{
  "id": "fig-vector_nf",
  "level": "2",
  "url": "sec-planes.html#fig-vector_nf",
  "type": "Figure",
  "number": "4.3.10",
  "title": "",
  "body": " Vector form of a plane     "
},
{
  "id": "def-vec-para-plane",
  "level": "2",
  "url": "sec-planes.html#def-vec-para-plane",
  "type": "Definition",
  "number": "4.3.11",
  "title": "",
  "body": "  The vector form of a plane is and parametric equations for are where is the position vector of a point on , and , are non-parallel direction vectors for .   "
},
{
  "id": "rem-plane-dir-vectors",
  "level": "2",
  "url": "sec-planes.html#rem-plane-dir-vectors",
  "type": "Remark",
  "number": "4.3.12",
  "title": "",
  "body": " The reason that we require the direction vectors and for a plane to be non-parallel is because if they are parallel, then for some , so which is the equation of a line in .  "
},
{
  "id": "ex-planes-all-forms",
  "level": "2",
  "url": "sec-planes.html#ex-planes-all-forms",
  "type": "Example",
  "number": "4.3.13",
  "title": "",
  "body": "  Find the vector form, parametric equations, normal form and general form for the plane containing the points , and .  We can take . The vector form is and the parametric equations are . We can take . Therefore the normal form is and the general form is .   "
},
{
  "id": "sec-shortest-distance",
  "level": "1",
  "url": "sec-shortest-distance.html",
  "type": "Section",
  "number": "4.4",
  "title": "Shortest distance from a point to a plane",
  "body": " Shortest distance from a point to a plane  We can find the shortest distance from a point to a plane with general by using projection. Let be the point on closest to . Let be any point on the plane. The setup is shown in . Then  The shortest distance from to the plane is      Calculating using components, . Finally, we substitute this into our formula for . This gives that the distance from a point to the plane is .    The distance from the point to the plane with general equation is     "
},
{
  "id": "fig-plane_dist",
  "level": "2",
  "url": "sec-shortest-distance.html#fig-plane_dist",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " The shortest distance from to the plane is     "
},
{
  "id": "ex-dist-pt-to-plane",
  "level": "2",
  "url": "sec-shortest-distance.html#ex-dist-pt-to-plane",
  "type": "Example",
  "number": "4.4.2",
  "title": "",
  "body": "  The distance from the point to the plane with general equation is    "
},
{
  "id": "sec-systems",
  "level": "1",
  "url": "sec-systems.html",
  "type": "Section",
  "number": "5.1",
  "title": "Systems of linear equations",
  "body": " Systems of linear equations  A general equation for a line in is , and a general equation for a plane in is . These are examples of what we call linear equations.    A linear equation in variables , is an equation of the form for constants . A solution to this equation is a collection of real numbers , such that .    The word linear means that we can only add and scale the variables (so no multiplication, division, powers, trigonometric functions, etc.).    The equations and are both linear. The equation is not linear because it involves multiplying variables. The equation for a circle is nonlinear because it involves powers. Trigonometric equations like are nonlinear.      Find two solutions for the linear equation .  Rearranging gives . Choosing gives the solution , and choosing gives the solution . Notice that there are infinitely many solutions, because we could have chosen any value for .    In this chapter we study systems of linear equations, which is what happens when we have multiple linear equations at once.    A system of linear equations in variables is , where for , , and . The system is homogeneous if for all . A solution to the system is a collection of real numbers that simultaneously satisfy all the equations, i.e.\\ such that for all such that .    We can solve these equations by scaling equations and adding or subtracting them, which is called `elimination'.    Solve the system .  Adding the equations gives , so . Back-substituting this into the first equation gives .      Solve the system .  Subtracting the equations gives , which is impossible. Therefore there are no solutions.      Solve the system .  If we try to subtract 2 times the first equation from the second, we get , which is true but not helpful. Instead, to solve this, let where is a parameter. Then, , is a solution for any .    Geometrically, has a unique solution because it corresponds to the intersection of non-parallel lines. has no solution because it corresponds to parallel (non-coinciding) lines. has infinite solutions given by the line , which has parametric equations . These examples show that we can handle a system of two equations in two variables, but we want to introduce a method for solving linear equations which gives us a procedure to solve systems of any size. To do this, it will help to have the following definition.    A matrix is a rectangular array of real numbers.    For example, the following are all matrices: . We will have much more to say about matrices during the rest of the course, where their significance will become more clear. For now, for solving systems of linear equations, we will focus on a special kind of matrix.    The augmented matrix of the system of linear equations is the matrix .    The following example shows how to use augmented matrix notation when solving a system of linear equations.    Solve the following system of linear equations with an augmented matrix: . The corresponding augmented matrix collects all the coefficients To eliminate, from row two, subtract , and from row three, subtract . This gives and swapping the second and third row gives . We can now solve the system by `back-substituting', which means solving the augmented matrix from the bottom upwards. The last row of the matrix says that , so . The second row says that , so , and the first row says that .    "
},
{
  "id": "def-linear-equation",
  "level": "2",
  "url": "sec-systems.html#def-linear-equation",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  A linear equation in variables , is an equation of the form for constants . A solution to this equation is a collection of real numbers , such that .   "
},
{
  "id": "ex-linear-non-linear",
  "level": "2",
  "url": "sec-systems.html#ex-linear-non-linear",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "  The equations and are both linear. The equation is not linear because it involves multiplying variables. The equation for a circle is nonlinear because it involves powers. Trigonometric equations like are nonlinear.   "
},
{
  "id": "ex-finding-sols",
  "level": "2",
  "url": "sec-systems.html#ex-finding-sols",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "  Find two solutions for the linear equation .  Rearranging gives . Choosing gives the solution , and choosing gives the solution . Notice that there are infinitely many solutions, because we could have chosen any value for .   "
},
{
  "id": "def-systems",
  "level": "2",
  "url": "sec-systems.html#def-systems",
  "type": "Definition",
  "number": "5.1.4",
  "title": "",
  "body": "  A system of linear equations in variables is , where for , , and . The system is homogeneous if for all . A solution to the system is a collection of real numbers that simultaneously satisfy all the equations, i.e.\\ such that for all such that .   "
},
{
  "id": "ex-pt",
  "level": "2",
  "url": "sec-systems.html#ex-pt",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": "  Solve the system .  Adding the equations gives , so . Back-substituting this into the first equation gives .   "
},
{
  "id": "ex-parallel",
  "level": "2",
  "url": "sec-systems.html#ex-parallel",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": "  Solve the system .  Subtracting the equations gives , which is impossible. Therefore there are no solutions.   "
},
{
  "id": "ex-coincide",
  "level": "2",
  "url": "sec-systems.html#ex-coincide",
  "type": "Example",
  "number": "5.1.7",
  "title": "",
  "body": "  Solve the system .  If we try to subtract 2 times the first equation from the second, we get , which is true but not helpful. Instead, to solve this, let where is a parameter. Then, , is a solution for any .   "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "sec-systems.html#def-matrix",
  "type": "Definition",
  "number": "5.1.8",
  "title": "",
  "body": "  A matrix is a rectangular array of real numbers.   "
},
{
  "id": "def-augmented-matrix",
  "level": "2",
  "url": "sec-systems.html#def-augmented-matrix",
  "type": "Definition",
  "number": "5.1.9",
  "title": "",
  "body": "  The augmented matrix of the system of linear equations is the matrix .   "
},
{
  "id": "ex-lineq",
  "level": "2",
  "url": "sec-systems.html#ex-lineq",
  "type": "Example",
  "number": "5.1.10",
  "title": "",
  "body": "  Solve the following system of linear equations with an augmented matrix: . The corresponding augmented matrix collects all the coefficients To eliminate, from row two, subtract , and from row three, subtract . This gives and swapping the second and third row gives . We can now solve the system by `back-substituting', which means solving the augmented matrix from the bottom upwards. The last row of the matrix says that , so . The second row says that , so , and the first row says that .   "
},
{
  "id": "sec-guassian-elimination",
  "level": "1",
  "url": "sec-guassian-elimination.html",
  "type": "Section",
  "number": "5.2",
  "title": "Gaussian elimination",
  "body": " Gaussian elimination  In this section, we develop the method used in into a general procedure.    The following list of elementary operations on a system of linear equations do not change the set of solutions:   swapping two equations    multiplying an equation by a nonzero constant    adding a multiple of one equation to another.   These correspond to elementary row operations (EROs) on the corresponding augmented matrix, which are   swapping two rows, written     multiplying a row by a nonzero constant, written ( )    adding a multiple\\footnote{In this ERO, there is there is no restriction on the multiple ; it could be zero. However, if then the matrix will be unchanged.} of one row to another, written          A matrix is in row echelon form (REF) if   All rows of zeroes (if there are any) are at the bottom    In each nonzero row, the first nonzero entry, called a leading entry , is in a column further to the right of leading entries in any rows above it. In other words, leading entries should only have zeroes beneath them \\textit{in their column and in columns to their left}.      There is nothing above the first row, so we don't need to check above the first row.    These three matrices are in REF. . For a matrix in REF, the shape formed by the nonzero entries should roughly look like a triangle, except if there are a lot of zeroes rows like the third matrix (which is still considered to be in REF even though it's entirely zero).  These two matrices are not in REF. . The issue with the first is that the leading entry (2) in the second row is not to the right of the leading entry (1) in the row above it, or in other words the issue is that the leading entry in the first row (1) has a nonzero entry (2) below it in its column. The issue with the second matrix is that it has a zero row which is not at the bottom. If we moved the zero row to the bottom (by swapping the second and third rows), then this matrix would be in REF.       Gaussian elimination is the process of solving a system of linear equations by applying elementary row operations to transform the corresponding augmented matrix to row echelon form, and then using back-substitution (solving the augmented matrix from the bottom row upwards).    Here are steps to row reduce a matrix into REF:   By swapping rows, make sure that the top row has less (or the same amount of) leading zeroes than all the other rows.    Then use the top row to make all the elements below its leading entry zero, by subtracting multiples of this row.    Once you have cleared out the first column, you are finished with the first row and column, so they should stay where they are. Move onto the second row and repeat the process, now using the second row to make all the entries below its leading entry zero.    Repeat this for every row to get the matrix into REF.   To perform Gaussian elimination, follow the steps to perform REF and then back-substitute. To understand and remember these steps, it is much easier to learn by example than to directly memorise them, so we will give many worked examples throughout the rest of this chapter. (Also, in some examples there may be quicker ways to get the matrix into REF. You don't need to follow the steps above exactly: as long as the matrix ends up in REF it's fine.)    Solve the system of linear equations .  We form the augmented matrix and row-reduce: . Back-substituting, the bottom row gives , so . The next row up (the middle row) gives , so . The top row gives , so . Therefore the unique solution is , , .      Use Gaussian elimination to solve the following system of linear equations: .  Calculating REF: . Back-substituting, . Then , so . Finally, the first row gives , which rearranges to give .     REF is not unique. For example, if an augmented matrix is in REF, we can multiply any of its rows by a nonzero scalar. This will give a different row echelon form of the matrix. REF matrices can have other differences too.   "
},
{
  "id": "def-elementary-operations",
  "level": "2",
  "url": "sec-guassian-elimination.html#def-elementary-operations",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "  The following list of elementary operations on a system of linear equations do not change the set of solutions:   swapping two equations    multiplying an equation by a nonzero constant    adding a multiple of one equation to another.   These correspond to elementary row operations (EROs) on the corresponding augmented matrix, which are   swapping two rows, written     multiplying a row by a nonzero constant, written ( )    adding a multiple\\footnote{In this ERO, there is there is no restriction on the multiple ; it could be zero. However, if then the matrix will be unchanged.} of one row to another, written       "
},
{
  "id": "def-REF",
  "level": "2",
  "url": "sec-guassian-elimination.html#def-REF",
  "type": "Definition",
  "number": "5.2.2",
  "title": "",
  "body": "  A matrix is in row echelon form (REF) if   All rows of zeroes (if there are any) are at the bottom    In each nonzero row, the first nonzero entry, called a leading entry , is in a column further to the right of leading entries in any rows above it. In other words, leading entries should only have zeroes beneath them \\textit{in their column and in columns to their left}.     "
},
{
  "id": "ex-REF-matrices",
  "level": "2",
  "url": "sec-guassian-elimination.html#ex-REF-matrices",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  These three matrices are in REF. . For a matrix in REF, the shape formed by the nonzero entries should roughly look like a triangle, except if there are a lot of zeroes rows like the third matrix (which is still considered to be in REF even though it's entirely zero).  These two matrices are not in REF. . The issue with the first is that the leading entry (2) in the second row is not to the right of the leading entry (1) in the row above it, or in other words the issue is that the leading entry in the first row (1) has a nonzero entry (2) below it in its column. The issue with the second matrix is that it has a zero row which is not at the bottom. If we moved the zero row to the bottom (by swapping the second and third rows), then this matrix would be in REF.   "
},
{
  "id": "def-gaussian-elim",
  "level": "2",
  "url": "sec-guassian-elimination.html#def-gaussian-elim",
  "type": "Definition",
  "number": "5.2.4",
  "title": "",
  "body": "   Gaussian elimination is the process of solving a system of linear equations by applying elementary row operations to transform the corresponding augmented matrix to row echelon form, and then using back-substitution (solving the augmented matrix from the bottom row upwards).   "
},
{
  "id": "ex-solving-system",
  "level": "2",
  "url": "sec-guassian-elimination.html#ex-solving-system",
  "type": "Example",
  "number": "5.2.5",
  "title": "",
  "body": "  Solve the system of linear equations .  We form the augmented matrix and row-reduce: . Back-substituting, the bottom row gives , so . The next row up (the middle row) gives , so . The top row gives , so . Therefore the unique solution is , , .   "
},
{
  "id": "ex-GE-to-solve",
  "level": "2",
  "url": "sec-guassian-elimination.html#ex-GE-to-solve",
  "type": "Example",
  "number": "5.2.6",
  "title": "",
  "body": "  Use Gaussian elimination to solve the following system of linear equations: .  Calculating REF: . Back-substituting, . Then , so . Finally, the first row gives , which rearranges to give .   "
},
{
  "id": "rem-REF-not-unique",
  "level": "2",
  "url": "sec-guassian-elimination.html#rem-REF-not-unique",
  "type": "Remark",
  "number": "5.2.7",
  "title": "",
  "body": " REF is not unique. For example, if an augmented matrix is in REF, we can multiply any of its rows by a nonzero scalar. This will give a different row echelon form of the matrix. REF matrices can have other differences too.  "
},
{
  "id": "sec-number-of-solutions",
  "level": "1",
  "url": "sec-number-of-solutions.html",
  "type": "Section",
  "number": "5.3",
  "title": "Number of solutions",
  "body": " Number of solutions  In most of the examples so far, and all of the examples which we have solved via Gaussian elimination, the system has had a single solution. In fact, this is only one of three possibilities.    Every system of linear equations has either   a unique solution    infinitely many solutions    no solutions.      In other words, it is impossible for the number of solutions to be 2, 3, \\dots or any finite number greater than 1.    A system of linear equations is called consistent if it has at least one solution, and inconsistent if it has no solutions.    We will not prove , but we will now sketch an argument in two special geometric cases, so that hopefully it seems reasonable.  Firstly, if we have two equations in two variables then each equation is a line in , so the solutions describe the intersection of two lines in . The only possibilities are one intersection, if the lines are not parallel; no solutions, if the lines are parallel and do not coincide; and infinitely many solutions if the lines coincide. Actually, we have already seen this in to , and we briefly discussed this there.  Secondly, if we have three equations in three variables, each equation is the general form of a plane in , so the number of solutions is the number of intersections of these planes. There can be a unique solution if all 3 planes meet at a single point, infinitely many solutions if the planes intersect along a line, or no solutions when the planes have no points in common. These possibilities are illustrated in and . A similar geometric argument works for equations in variables, though it becomes harder to visualise.   Intersections of three planes in    Single intersection.       Infinitely many intersection points.         Three planes in with no common intersection               Gaussian elimination for equations with no or infinitely many solutions: The first step is always to get the augmented matrix into REF. Once you've done this, here's how to tell how many solutions there are, and what to do next.   If in REF we have a row of the form where is nonzero, then we conclude that there are no solutions. This is because it is impossible for to equal something nonzero.    Look for any columns such that all its entries are not the leading entries of any row. (This can occur if there are less equations than the number of variables, or if there is a zero row in REF.) If there are any, then you will need to assign these variables to a parameter. For example, consider the REF augmented matrix Then the -column doesn't contain any leading entries, so we introduce the parameter , and let . Now solve for the rest of the variables in terms of the parameter. There will be infinitely many solutions (one for each value of the parameter).    If neither of the two above situations apply, then there is a unique solution, and we can solve for it as usual.       Show that the system of linear equations . has no solutions.  Row reducing gives . The last row is a zero row with 2 after the line, so there is no solution.    The next example shows how to solve linear equations with infinitely many solutions, by introducing a parameter. In this example, we will only need to introduce one parameter. Sometimes it is necessary to introduce multiple parameters; this will be covered later in .    Solve the system of linear equations . has no solutions.  Row reducing gives . The last column has no leading entries, so is not determined. However, this is fine: we let , for a parameter. Now we can back-substitute in terms of . We have , so . Finally, . So there are infinitely many solutions , .    A geometric interpretation of is that the 3 planes intersect in the line . Notice that to save space and time, we didn't label the arrows during row reduction. We will sometimes do the same thing in future examples.  "
},
{
  "id": "thm-solns",
  "level": "2",
  "url": "sec-number-of-solutions.html#thm-solns",
  "type": "Theorem",
  "number": "5.3.1",
  "title": "",
  "body": "  Every system of linear equations has either   a unique solution    infinitely many solutions    no solutions.     "
},
{
  "id": "def-consistent",
  "level": "2",
  "url": "sec-number-of-solutions.html#def-consistent",
  "type": "Definition",
  "number": "5.3.2",
  "title": "",
  "body": "  A system of linear equations is called consistent if it has at least one solution, and inconsistent if it has no solutions.   "
},
{
  "id": "fig-plane_int12",
  "level": "2",
  "url": "sec-number-of-solutions.html#fig-plane_int12",
  "type": "Figure",
  "number": "5.3.3",
  "title": "",
  "body": " Intersections of three planes in    Single intersection.       Infinitely many intersection points.       "
},
{
  "id": "fig-plane_int3",
  "level": "2",
  "url": "sec-number-of-solutions.html#fig-plane_int3",
  "type": "Figure",
  "number": "5.3.4",
  "title": "",
  "body": " Three planes in with no common intersection             "
},
{
  "id": "sec-number-of-solutions-11",
  "level": "2",
  "url": "sec-number-of-solutions.html#sec-number-of-solutions-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian elimination for equations with no or infinitely many solutions: "
},
{
  "id": "ex-no-sols",
  "level": "2",
  "url": "sec-number-of-solutions.html#ex-no-sols",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": "  Show that the system of linear equations . has no solutions.  Row reducing gives . The last row is a zero row with 2 after the line, so there is no solution.   "
},
{
  "id": "ex-inftysolns",
  "level": "2",
  "url": "sec-number-of-solutions.html#ex-inftysolns",
  "type": "Example",
  "number": "5.3.6",
  "title": "",
  "body": "  Solve the system of linear equations . has no solutions.  Row reducing gives . The last column has no leading entries, so is not determined. However, this is fine: we let , for a parameter. Now we can back-substitute in terms of . We have , so . Finally, . So there are infinitely many solutions , .   "
},
{
  "id": "sec-gauss-jordan-elimination",
  "level": "1",
  "url": "sec-gauss-jordan-elimination.html",
  "type": "Section",
  "number": "5.4",
  "title": "Gauss-Jordan elimination",
  "body": " Gauss-Jordan elimination  Gauss--Jordan elimination is a method of solving systems of linear equations that is quite similar to Gaussian elimination, except it is based on reduced row echelon form instead of REF.    A matrix is in reduced row echelon form (RREF) if   it is in REF    every leading entry is equal to 1    all columns that have a leading 1 have zeroes everywhere else.        The following two matrices are in RREF. . The following three matrices are not in RREF. . This is because the first has a leading 3 in its last column, the second is not in REF, and the third has a 2 above the leading 1 in the bottom row.     The RREF of a matrix is unique! Why?      Gauss--Jordan elimination is the process of solving a system of linear equations by row reducing its augmented matrix to RREF. The solutions can then be read directly from the RREF.    Because every RREF matrix is in REF, Gauss--Jordan is very similar to Gaussian elimination at the beginning, but then it has some extra row reduction at the end. Specifically, once the matrix is in REF, use each leading entry to make all the entries above it zero. We do this starting from the last row and working upwards. This is shown in the next examples.    Use Gauss--Jordan elimination to solve the following system: . Row reducing to RREF gives . The matrix is now in RREF, and we can read the solution , , . (Notice that the matrix was in REF after the second line of row-reduction. The third line shows the steps needed to get it into RREF.)    The next example is another example of Gauss--Jordan elimination, as well as an example of needing to introduce multiple parameters to solve a system of linear equations.    Use Gauss--Jordan elimination to solve the following system of linear equations: . Row reducing to RREF gives This is in RREF. Let and , for . (Here we are considering the fourth column as the -column.) Then the solution is     Often Gauss--Jordan elimination is slightly slower than Gaussian elimination. However, it is still good to know. Additionally, it introduces the concept of RREF, which will be important later for its connection to matrix inverses.  "
},
{
  "id": "def-RREF",
  "level": "2",
  "url": "sec-gauss-jordan-elimination.html#def-RREF",
  "type": "Definition",
  "number": "5.4.1",
  "title": "",
  "body": "  A matrix is in reduced row echelon form (RREF) if   it is in REF    every leading entry is equal to 1    all columns that have a leading 1 have zeroes everywhere else.     "
},
{
  "id": "ex-RREF-matrices",
  "level": "2",
  "url": "sec-gauss-jordan-elimination.html#ex-RREF-matrices",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "  The following two matrices are in RREF. . The following three matrices are not in RREF. . This is because the first has a leading 3 in its last column, the second is not in REF, and the third has a 2 above the leading 1 in the bottom row.   "
},
{
  "id": "rem-RREF",
  "level": "2",
  "url": "sec-gauss-jordan-elimination.html#rem-RREF",
  "type": "Remark",
  "number": "5.4.3",
  "title": "",
  "body": " The RREF of a matrix is unique! Why?  "
},
{
  "id": "def-GJ-elimination",
  "level": "2",
  "url": "sec-gauss-jordan-elimination.html#def-GJ-elimination",
  "type": "Definition",
  "number": "5.4.4",
  "title": "",
  "body": "   Gauss--Jordan elimination is the process of solving a system of linear equations by row reducing its augmented matrix to RREF. The solutions can then be read directly from the RREF.   "
},
{
  "id": "ex-GJ-solving",
  "level": "2",
  "url": "sec-gauss-jordan-elimination.html#ex-GJ-solving",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": "  Use Gauss--Jordan elimination to solve the following system: . Row reducing to RREF gives . The matrix is now in RREF, and we can read the solution , , . (Notice that the matrix was in REF after the second line of row-reduction. The third line shows the steps needed to get it into RREF.)   "
},
{
  "id": "ex-multparam",
  "level": "2",
  "url": "sec-gauss-jordan-elimination.html#ex-multparam",
  "type": "Example",
  "number": "5.4.6",
  "title": "",
  "body": "  Use Gauss--Jordan elimination to solve the following system of linear equations: . Row reducing to RREF gives This is in RREF. Let and , for . (Here we are considering the fourth column as the -column.) Then the solution is    "
},
{
  "id": "sec-matrices",
  "level": "1",
  "url": "sec-matrices.html",
  "type": "Section",
  "number": "6.1",
  "title": "Matrices",
  "body": " Matrices  We defined a matrix in (see also the example following that definition), but we will repeat it here since now we are going to start studying them in detail.    A matrix is a rectangular array of numbers.     Terminology:    The numbers in the array are called the entries of the matrix.    We usually denote matrices by the capital roman letters or . In other sources, it is also common to use and , where is for `matrix'.    The size of a matrix is if it has rows and columns.    The - entry of a matrix is the entry in the th row and th column of , and it is denoted by . (Similarly, the -entry of a matrix is denoted , and so on.)    A row matrix or row vector is a matrix, and a column matrix or a column vector is a matrix.       Consider the matrices . The first is a row matrix and the second is a column matrix.    Notice how these special matrices look essentially the same as vectors.   If is an matrix, we can write We may also write for short. If the columns of are the column vectors , , we may write . If the rows of are the row vectors , , we may write .    Find the size and the entry of the following matrices. .  Answer: has size and , since this is the first entry of the second row. is a matrix and . is a matrix and      More terminology:    A square matrix is a matrix of size , for some     The diagonal entries of a square matrix are     A diagonal matrix is a square matrix in which all non-diagonal entries are zero    The identity matrix  is the diagonal matrix with all diagonal entries equal to 1    The zero matrix  is the matrix with all entries equal to zero.       Here are examples for each definition.          is not square since it is         is square with diagonal entries . It is not diagonal since .        is diagonal with diagonal entries        This is the identity matrix       This is the identity matrix       This is the zero matrix.        Two matrices and are equal if their corresponding entries are equal.    In other words, if and only if for all , .    Let where and . Then because     "
},
{
  "id": "def-matrix2",
  "level": "2",
  "url": "sec-matrices.html#def-matrix2",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  A matrix is a rectangular array of numbers.   "
},
{
  "id": "sec-matrices-4",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Terminology: entries size entry row matrix row vector column matrix column vector "
},
{
  "id": "ex-basic-matrices",
  "level": "2",
  "url": "sec-matrices.html#ex-basic-matrices",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": "  Consider the matrices . The first is a row matrix and the second is a column matrix.   "
},
{
  "id": "ex-matrix-sizes",
  "level": "2",
  "url": "sec-matrices.html#ex-matrix-sizes",
  "type": "Example",
  "number": "6.1.3",
  "title": "",
  "body": "  Find the size and the entry of the following matrices. .  Answer: has size and , since this is the first entry of the second row. is a matrix and . is a matrix and    "
},
{
  "id": "sec-matrices-9",
  "level": "2",
  "url": "sec-matrices.html#sec-matrices-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "More terminology: square matrix diagonal entries diagonal matrix identity matrix zero matrix "
},
{
  "id": "ex-matrix-concepts",
  "level": "2",
  "url": "sec-matrices.html#ex-matrix-concepts",
  "type": "Example",
  "number": "6.1.4",
  "title": "",
  "body": "  Here are examples for each definition.          is not square since it is         is square with diagonal entries . It is not diagonal since .        is diagonal with diagonal entries        This is the identity matrix       This is the identity matrix       This is the zero matrix.     "
},
{
  "id": "def-equality-of-matrices",
  "level": "2",
  "url": "sec-matrices.html#def-equality-of-matrices",
  "type": "Definition",
  "number": "6.1.5",
  "title": "",
  "body": "  Two matrices and are equal if their corresponding entries are equal.   "
},
{
  "id": "ex-equal-matrices",
  "level": "2",
  "url": "sec-matrices.html#ex-equal-matrices",
  "type": "Example",
  "number": "6.1.6",
  "title": "",
  "body": "  Let where and . Then because    "
},
{
  "id": "sec-matrix-add-and-scale",
  "level": "1",
  "url": "sec-matrix-add-and-scale.html",
  "type": "Section",
  "number": "6.2",
  "title": "Matrix addition and scalar multiplication",
  "body": " Matrix addition and scalar multiplication    The sum of two matrices is the matrix .    So to add matrices, we add each component. Note that the matrices are required to be the same size. Scalar multiplication of matrices is also defined by considering each component.   Scalar multiple   The scalar multiple of an matrix by a scalar is the matrix .    Like for vectors (and for numbers), we write and .    Let . Find all of the following that are defined: , , , .  We calculate that and . and are not defined, since is a different size to and .    Matrix addition and scalar multiplication has the following properties.    Let be matrices, and let be scalars. Then   (commutativity of addition)    (associativity)            (distributivity)    (distributivity)        .        Notice that these are the same properties satisfied for vector addition and scalar multiplication (see ).  "
},
{
  "id": "def-matrix-sum",
  "level": "2",
  "url": "sec-matrix-add-and-scale.html#def-matrix-sum",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "  The sum of two matrices is the matrix .   "
},
{
  "id": "def-scalar-multiple",
  "level": "2",
  "url": "sec-matrix-add-and-scale.html#def-scalar-multiple",
  "type": "Definition",
  "number": "6.2.2",
  "title": "Scalar multiple.",
  "body": " Scalar multiple   The scalar multiple of an matrix by a scalar is the matrix .   "
},
{
  "id": "ex-matrix-algebra-basic",
  "level": "2",
  "url": "sec-matrix-add-and-scale.html#ex-matrix-algebra-basic",
  "type": "Example",
  "number": "6.2.3",
  "title": "",
  "body": "  Let . Find all of the following that are defined: , , , .  We calculate that and . and are not defined, since is a different size to and .   "
},
{
  "id": "thm-matrix-addition",
  "level": "2",
  "url": "sec-matrix-add-and-scale.html#thm-matrix-addition",
  "type": "Theorem",
  "number": "6.2.4",
  "title": "",
  "body": "  Let be matrices, and let be scalars. Then   (commutativity of addition)    (associativity)            (distributivity)    (distributivity)        .      "
},
{
  "id": "sec-matrix-mult",
  "level": "1",
  "url": "sec-matrix-mult.html",
  "type": "Section",
  "number": "6.3",
  "title": "Matrix multiplication",
  "body": " Matrix multiplication  The definition of matrix multiplication is more complicated, but it is very important and it is the reason that matrices will have so many nice properties. We will explain the motivation behind it in at the end of this section.    Let be an matrix and be an matrix. Then we define the matrix product of size where the entries are defined by .    So to find the entry in the th row and the th column of , we take the dot product of the th row of with the th column of . Notice that the row index of tells us which row of to consider, and the column index tells us which column of to consider.    Find and for   We calculate that . Notice that .    This example shows that it is not true for all matrices that .   Commutes   If and are matrices such that , then we say that  commutes with .     In , we defined matrix multiplication for matrices with matrices, and it gave a matrix. The number of columns of and the number of rows of (both of which we called ) don't affect the size of the matrix product, but they must be equal in order for the matrix multiplication formula to make sense. If they are not equal, then we say that is undefined .   In , and were both defined, since and were matrices.    Let . Find all of the following that are defined: .  Answer: is and is , so is defined and is . It is . For example, to calculate the element of the product , we did . Next, is and is . The inner numbers and don't match, so is undefined. Similarly, for , is and is multiplied with which is , which doesn't match, so is undefined. is so its number of columns equals its number of rows, so is defined and is . We have .    Recall the identity matrix from . The next theorem lists properties of matrix multiplication.    Let be matrices. Let be a scalar. Then, whenever the relevant matrix multiplications are defined, we have   \\hfill (associativity)    \\hfill (left distributivity)    \\hfill (right distributivity)        If has size , then .      Property 5 explains the name `identity matrix': when we multiply a matrix by the identity matrix of the right size, we get the same (`identical') matrix . So is like the number for matrices. We will prove only Property 5; the rest of the properties are similar to the properties of addition and scalar multiplication for vectors and matrices (but the proofs are a bit tedious).   Let and where if and otherwise. Since (by definition of ), the -entry of is . Therefore, by definition of matrix equality, . The proof that is similar.    For a matrix power (such as , , ) to be defined, the matrix must be square. Compare this with : there was not square so was not defined, but was square so was defined.  The convention that is useful in the same way that for any number , because then matrices satisfy the index law , for any integers .    is well-defined because of associativity. For example, the notation is unambiguous, because .     If then    The next example shows how using the properties of matrix multiplication can simplify a matrix calculation.    Find for .  We first simplify to get . Then and . Therefore    It is possible that for some even if is not the zero matrix.     If is an matrix, we define matrix powers by .     Why is the definition of matrix multiplication so complicated? One answer is that a system of linear equations is encoded in the matrix equation where . Matrix multiplication is defined so that it corresponds to composing (by substitution) matrix equations. That is, if and , then is defined so that relates to by .  Another answer is that matrices are closely related to a special kind of function called a linear transformation . If the matrices and have corresponding linear transformations and , then the matrix product is defined so that its corresponding linear transformation is the composition . The ideas and details in this answer are beyond the scope of this course, but they are developed much further in the unit MATH2X22: Linear and Abstract Algebra.     Use matrix multiplication to find expressions for and in terms of and , given that .  We have . We compose equations by . So , and .     The matrix method only requires a single matrix multiplication, while direct substitution can involve many substitutions (depending on the number of variables). Therefore, for large systems of equations, it is faster to compose them using matrices.  "
},
{
  "id": "def-matmult",
  "level": "2",
  "url": "sec-matrix-mult.html#def-matmult",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  Let be an matrix and be an matrix. Then we define the matrix product of size where the entries are defined by .   "
},
{
  "id": "ex-matmult1",
  "level": "2",
  "url": "sec-matrix-mult.html#ex-matmult1",
  "type": "Example",
  "number": "6.3.2",
  "title": "",
  "body": "  Find and for   We calculate that . Notice that .   "
},
{
  "id": "def-commutes",
  "level": "2",
  "url": "sec-matrix-mult.html#def-commutes",
  "type": "Definition",
  "number": "6.3.3",
  "title": "Commutes.",
  "body": " Commutes   If and are matrices such that , then we say that  commutes with .   "
},
{
  "id": "rem-undefined-matrix-product",
  "level": "2",
  "url": "sec-matrix-mult.html#rem-undefined-matrix-product",
  "type": "Remark",
  "number": "6.3.4",
  "title": "",
  "body": " In , we defined matrix multiplication for matrices with matrices, and it gave a matrix. The number of columns of and the number of rows of (both of which we called ) don't affect the size of the matrix product, but they must be equal in order for the matrix multiplication formula to make sense. If they are not equal, then we say that is undefined .  "
},
{
  "id": "ex-mat-power",
  "level": "2",
  "url": "sec-matrix-mult.html#ex-mat-power",
  "type": "Example",
  "number": "6.3.5",
  "title": "",
  "body": "  Let . Find all of the following that are defined: .  Answer: is and is , so is defined and is . It is . For example, to calculate the element of the product , we did . Next, is and is . The inner numbers and don't match, so is undefined. Similarly, for , is and is multiplied with which is , which doesn't match, so is undefined. is so its number of columns equals its number of rows, so is defined and is . We have .   "
},
{
  "id": "thm-matrix-algebra-props",
  "level": "2",
  "url": "sec-matrix-mult.html#thm-matrix-algebra-props",
  "type": "Theorem",
  "number": "6.3.6",
  "title": "",
  "body": "  Let be matrices. Let be a scalar. Then, whenever the relevant matrix multiplications are defined, we have   \\hfill (associativity)    \\hfill (left distributivity)    \\hfill (right distributivity)        If has size , then .     "
},
{
  "id": "sec-matrix-mult-14",
  "level": "2",
  "url": "sec-matrix-mult.html#sec-matrix-mult-14",
  "type": "Proof",
  "number": "6.3.1",
  "title": "",
  "body": " Let and where if and otherwise. Since (by definition of ), the -entry of is . Therefore, by definition of matrix equality, . The proof that is similar.  "
},
{
  "id": "rem-powers-and-associativity",
  "level": "2",
  "url": "sec-matrix-mult.html#rem-powers-and-associativity",
  "type": "Remark",
  "number": "6.3.7",
  "title": "",
  "body": "  is well-defined because of associativity. For example, the notation is unambiguous, because .  "
},
{
  "id": "ex-taking-powers",
  "level": "2",
  "url": "sec-matrix-mult.html#ex-taking-powers",
  "type": "Example",
  "number": "6.3.8",
  "title": "",
  "body": "  If then   "
},
{
  "id": "ex-powers-and-alg-expressions",
  "level": "2",
  "url": "sec-matrix-mult.html#ex-powers-and-alg-expressions",
  "type": "Example",
  "number": "6.3.9",
  "title": "",
  "body": "  Find for .  We first simplify to get . Then and . Therefore   "
},
{
  "id": "def-matrix-powers",
  "level": "2",
  "url": "sec-matrix-mult.html#def-matrix-powers",
  "type": "Definition",
  "number": "6.3.10",
  "title": "",
  "body": "  If is an matrix, we define matrix powers by .   "
},
{
  "id": "rmk-mult",
  "level": "2",
  "url": "sec-matrix-mult.html#rmk-mult",
  "type": "Remark",
  "number": "6.3.11",
  "title": "",
  "body": " Why is the definition of matrix multiplication so complicated? One answer is that a system of linear equations is encoded in the matrix equation where . Matrix multiplication is defined so that it corresponds to composing (by substitution) matrix equations. That is, if and , then is defined so that relates to by .  Another answer is that matrices are closely related to a special kind of function called a linear transformation . If the matrices and have corresponding linear transformations and , then the matrix product is defined so that its corresponding linear transformation is the composition . The ideas and details in this answer are beyond the scope of this course, but they are developed much further in the unit MATH2X22: Linear and Abstract Algebra.  "
},
{
  "id": "ex-mat-comp",
  "level": "2",
  "url": "sec-matrix-mult.html#ex-mat-comp",
  "type": "Example",
  "number": "6.3.12",
  "title": "",
  "body": "  Use matrix multiplication to find expressions for and in terms of and , given that .  We have . We compose equations by . So , and .   "
},
{
  "id": "sec-transpose",
  "level": "1",
  "url": "sec-transpose.html",
  "type": "Section",
  "number": "6.4",
  "title": "Transpose",
  "body": " Transpose    The transpose of an matrix is the matrix where .    We see that is obtained from by swapping the row index with the column index. This means that is the matrix where the columns in have become rows (the first column becomes the first row, etc.), and the rows in have become columns.    The transpose of the matrix is      Let be an matrix. Then   is and is , so is defined and has size     is and is , so is defined and has size .        Consider two vectors as column matrices . Then is and is , so is defined and is a matrix, which we can view as a real number. Show that .  Answer: we calculate that     The matrix transpose has the following properties. Properties 2 and 3 are referred to as linearity. Property 4 says that we need to be careful when taking the transpose of a matrix product: we need to remember to reverse the order.    Let and be matrices, and . Then, whenever the relevant expressions are defined, we have                   , for any    By repeatedly applying Properties and , we can generalise these for arbitrary sums and products to get .    For 1, swapping the rows and columns twice gives back the original matrix. For 2, let , so that . Then . Thus . The proof of 3 is that .  For , so that and are the right size, write and . Then is and is , so is . Hence and have the same size; we now show they have the same entries. The -entry of is the -entry of , which is which equals the -entry of .  Finally, to prove Property 5, use the generalised version of Property 4 with to get     "
},
{
  "id": "def-transpose",
  "level": "2",
  "url": "sec-transpose.html#def-transpose",
  "type": "Definition",
  "number": "6.4.1",
  "title": "",
  "body": "  The transpose of an matrix is the matrix where .   "
},
{
  "id": "ex-calculating-transposes",
  "level": "2",
  "url": "sec-transpose.html#ex-calculating-transposes",
  "type": "Example",
  "number": "6.4.2",
  "title": "",
  "body": "  The transpose of the matrix is    "
},
{
  "id": "rem-transpose-size",
  "level": "2",
  "url": "sec-transpose.html#rem-transpose-size",
  "type": "Remark",
  "number": "6.4.3",
  "title": "",
  "body": " Let be an matrix. Then   is and is , so is defined and has size     is and is , so is defined and has size .     "
},
{
  "id": "ex-more-transposes",
  "level": "2",
  "url": "sec-transpose.html#ex-more-transposes",
  "type": "Example",
  "number": "6.4.4",
  "title": "",
  "body": "  Consider two vectors as column matrices . Then is and is , so is defined and is a matrix, which we can view as a real number. Show that .  Answer: we calculate that    "
},
{
  "id": "thm-transpose-props",
  "level": "2",
  "url": "sec-transpose.html#thm-transpose-props",
  "type": "Theorem",
  "number": "6.4.5",
  "title": "",
  "body": "  Let and be matrices, and . Then, whenever the relevant expressions are defined, we have                   , for any    By repeatedly applying Properties and , we can generalise these for arbitrary sums and products to get .    For 1, swapping the rows and columns twice gives back the original matrix. For 2, let , so that . Then . Thus . The proof of 3 is that .  For , so that and are the right size, write and . Then is and is , so is . Hence and have the same size; we now show they have the same entries. The -entry of is the -entry of , which is which equals the -entry of .  Finally, to prove Property 5, use the generalised version of Property 4 with to get    "
},
{
  "id": "sec-properties-of-inverses",
  "level": "1",
  "url": "sec-properties-of-inverses.html",
  "type": "Section",
  "number": "7.1",
  "title": "Properties of inverses",
  "body": " Properties of inverses  Let and consider the equation of real numbers . If , then has the inverse , and there is a unique solution . This works because .  We see that the key property of is that , and similarly it's useful that . (For real numbers this is essentially the same thing, because multiplication is commutative, but remember that matrix multiplication is not commutative.) We will define matrix inverses to have these properties, so that we can likewise solve the matrix equation to get .    An inverse of an matrix is an matrix such that . If such a matrix exists, then we say that is invertible .    Note that we require and to both be so that and are both defined.    Let . Then . So by definition, is an inverse of (and is an inverse of ).    The zero matrix is not invertible since for any matrix , we have . However, unlike real numbers, there are nonzero matrices which are not invertible.    Let . Calculate and show that is not invertible.  We have . If the -entry is zero, then the -entry is also zero, so is not equal to 1. This shows that regardless of the value of . Therefore has no inverse.      If an matrix is invertible, then it has a unique inverse.    Suppose and are any two inverses of . Then since is an inverse of . But then using associativity and that is an inverse of . Thus .    Since if is invertible it only has one inverse, we will now refer to it as the inverse of , and denote it by .    Do not write for the inverse . This is a number divided by a matrix, so it makes no sense. Therefore, if we have a matrix equation where is invertible, and solve it to get , you should think of this as multiplication by rather than division by . Even though for real numbers this is the same thing, to avoid confusion it is best to never think about division when working with matrices.   Matrix inversion has the following properties, which are similar to the properties for the matrix transpose.    Suppose and are invertible matrices, and is a nonzero scalar. Then   is invertible, and     is invertible, and     is invertible, and     is invertible, and     is invertible for any , and .      We will prove the first 4 properties. The proof of Property 5 is an exercise.   The equation which comes from being invertible also says that is invertible and (think about this) which proves 1. Property 2 follows from the calculation and Property 3 follows from the calculation . For Property 4, observe that    We will use the notation .    Solve for in terms of and .  We calculate, using properties of the matrix inverse, that     "
},
{
  "id": "def-inverse",
  "level": "2",
  "url": "sec-properties-of-inverses.html#def-inverse",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": "  An inverse of an matrix is an matrix such that . If such a matrix exists, then we say that is invertible .   "
},
{
  "id": "ex-inverse-check",
  "level": "2",
  "url": "sec-properties-of-inverses.html#ex-inverse-check",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": "  Let . Then . So by definition, is an inverse of (and is an inverse of ).   "
},
{
  "id": "ex-non-invertible",
  "level": "2",
  "url": "sec-properties-of-inverses.html#ex-non-invertible",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  Let . Calculate and show that is not invertible.  We have . If the -entry is zero, then the -entry is also zero, so is not equal to 1. This shows that regardless of the value of . Therefore has no inverse.   "
},
{
  "id": "thm-unique",
  "level": "2",
  "url": "sec-properties-of-inverses.html#thm-unique",
  "type": "Theorem",
  "number": "7.1.4",
  "title": "",
  "body": "  If an matrix is invertible, then it has a unique inverse.    Suppose and are any two inverses of . Then since is an inverse of . But then using associativity and that is an inverse of . Thus .   "
},
{
  "id": "rem-inverse-notation",
  "level": "2",
  "url": "sec-properties-of-inverses.html#rem-inverse-notation",
  "type": "Remark",
  "number": "7.1.5",
  "title": ".",
  "body": "  Do not write for the inverse . This is a number divided by a matrix, so it makes no sense. Therefore, if we have a matrix equation where is invertible, and solve it to get , you should think of this as multiplication by rather than division by . Even though for real numbers this is the same thing, to avoid confusion it is best to never think about division when working with matrices.  "
},
{
  "id": "thm-inv",
  "level": "2",
  "url": "sec-properties-of-inverses.html#thm-inv",
  "type": "Theorem",
  "number": "7.1.6",
  "title": "",
  "body": "  Suppose and are invertible matrices, and is a nonzero scalar. Then   is invertible, and     is invertible, and     is invertible, and     is invertible, and     is invertible for any , and .     "
},
{
  "id": "sec-properties-of-inverses-15",
  "level": "2",
  "url": "sec-properties-of-inverses.html#sec-properties-of-inverses-15",
  "type": "Proof",
  "number": "7.1.1",
  "title": "",
  "body": " The equation which comes from being invertible also says that is invertible and (think about this) which proves 1. Property 2 follows from the calculation and Property 3 follows from the calculation . For Property 4, observe that   "
},
{
  "id": "ex-matrix-algebra-with-inverses",
  "level": "2",
  "url": "sec-properties-of-inverses.html#ex-matrix-algebra-with-inverses",
  "type": "Example",
  "number": "7.1.7",
  "title": "",
  "body": "  Solve for in terms of and .  We calculate, using properties of the matrix inverse, that    "
},
{
  "id": "sec-calculating-2x2-inverses",
  "level": "1",
  "url": "sec-calculating-2x2-inverses.html",
  "type": "Section",
  "number": "7.2",
  "title": "Calculating <span class=\"process-math\">\\(2\\times 2\\)<\/span> inverses",
  "body": " Calculating inverses  The next theorem tells us when a matrix is invertible, and what its inverse is (if it has one).    A matrix is invertible if and only if . In this case, we have .    Suppose . Then . Similarly one can show that . This shows that is invertible, with the desired inverse.  Conversely, suppose that .   Case 1: If , then , so or . If , since the -entry is zero instead of one. If , then . Since were arbitrary, this means that has no inverse.   Case 2: If , then . Then, in the following Problem you are asked to show that is not invertible.       The determinant of a matrix is the real number .    Therefore says that is invertible if and only if , and in this case . So, to calculate the inverse of a matrix, swap the elements on the diagonal, and negate the elements off the diagonal; then scale by .    Determine whether the matrix is invertible and find the inverse if it exists for the following matrices: .  First, , so is invertible, with inverse . Second, is not invertible since .    "
},
{
  "id": "thm-invertible",
  "level": "2",
  "url": "sec-calculating-2x2-inverses.html#thm-invertible",
  "type": "Theorem",
  "number": "7.2.1",
  "title": "",
  "body": "  A matrix is invertible if and only if . In this case, we have .    Suppose . Then . Similarly one can show that . This shows that is invertible, with the desired inverse.  Conversely, suppose that .   Case 1: If , then , so or . If , since the -entry is zero instead of one. If , then . Since were arbitrary, this means that has no inverse.   Case 2: If , then . Then, in the following Problem you are asked to show that is not invertible.   "
},
{
  "id": "def-2x2-determinant",
  "level": "2",
  "url": "sec-calculating-2x2-inverses.html#def-2x2-determinant",
  "type": "Definition",
  "number": "7.2.2",
  "title": "",
  "body": "  The determinant of a matrix is the real number .   "
},
{
  "id": "ex-inv2",
  "level": "2",
  "url": "sec-calculating-2x2-inverses.html#ex-inv2",
  "type": "Example",
  "number": "7.2.3",
  "title": "",
  "body": "  Determine whether the matrix is invertible and find the inverse if it exists for the following matrices: .  First, , so is invertible, with inverse . Second, is not invertible since .   "
},
{
  "id": "sec-calculating-nxn-inverses",
  "level": "1",
  "url": "sec-calculating-nxn-inverses.html",
  "type": "Section",
  "number": "7.3",
  "title": "Calculating <span class=\"process-math\">\\(n\\times n\\)<\/span> inverses",
  "body": " Calculating inverses  Finding the inverse of a general matrix involves row reduction.    An matrix is invertible if and only if the augmented matrix can be row reduced to for some matrix . In this case, .    In other words, an matrix is invertible if and only if its RREF is .  Here is a heuristic explanation of why this is true: when we are row-reducing the matrix , all of the elementary row operations also affect the matrix to the right of the line in the augmented matrix. So, once we get to , the matrix encodes how to get from to . The equation suggests that does the same thing and so . We need the RREF to be to ensure that the augmented matrix has a unique solution, which we need because inverses are unique.  When is , this method gives the same answer as the method in the previous section.    Use row reduction to find the inverse, if it exists, of the matrices .  We have . Therefore is invertible with inverse . Next, . Since the RREF has a zero row, the RREF is not , so is not invertible. These answers for and are the same as in , where we used the inverse formula for these matrices.    For matrices, it is faster to just memorise the formula. But the advantage of this method is that we can solve for the inverse of bigger matrices.    Find the inverse of the matrix .  By row reduction, . So is invertible with inverse     "
},
{
  "id": "thm-general-invertible",
  "level": "2",
  "url": "sec-calculating-nxn-inverses.html#thm-general-invertible",
  "type": "Theorem",
  "number": "7.3.1",
  "title": "",
  "body": "  An matrix is invertible if and only if the augmented matrix can be row reduced to for some matrix . In this case, .   "
},
{
  "id": "ex-finding-general-inverse",
  "level": "2",
  "url": "sec-calculating-nxn-inverses.html#ex-finding-general-inverse",
  "type": "Example",
  "number": "7.3.2",
  "title": "",
  "body": "  Use row reduction to find the inverse, if it exists, of the matrices .  We have . Therefore is invertible with inverse . Next, . Since the RREF has a zero row, the RREF is not , so is not invertible. These answers for and are the same as in , where we used the inverse formula for these matrices.   "
},
{
  "id": "ex-inv3",
  "level": "2",
  "url": "sec-calculating-nxn-inverses.html#ex-inv3",
  "type": "Example",
  "number": "7.3.3",
  "title": "",
  "body": "  Find the inverse of the matrix .  By row reduction, . So is invertible with inverse    "
},
{
  "id": "sec-inverses-and-equations",
  "level": "1",
  "url": "sec-inverses-and-equations.html",
  "type": "Section",
  "number": "7.4",
  "title": "Inverses and matrix equations",
  "body": " Inverses and matrix equations  Let , and consider the linear equation . If is invertible (so if ), then the equation has a unique solution given by . If , the equation becomes . This has infinitely many solutions if , and no solutions if .  Now let be an matrix, let be column matrices, and consider the matrix equation corresponding to a system of linear equations in variables where .    If is an invertible matrix, then the equation has unique solution .    is a solution because . It is unique, because if for another solution , then     If is not invertible, then will have infinitely many solutions or no solutions, depending on . This is because the RREF of will have at least one column without a leading entry, so if is consistent, the solution involves at least one parameter.     Use a matrix inverse to solve .  This is for where is the same matrix that we calculated the inverse of in . So . We conclude that there is a unique solution , , .    This method might seem efficient, but it relies on computing a matrix inverse, which for matrices larger than can take some time to compute. However, it does have the advantage that if we change the value of , the inverse will still be the same, so we can quickly re-calculate .  "
},
{
  "id": "thm-uniquesoln",
  "level": "2",
  "url": "sec-inverses-and-equations.html#thm-uniquesoln",
  "type": "Theorem",
  "number": "7.4.1",
  "title": "",
  "body": "  If is an invertible matrix, then the equation has unique solution .    is a solution because . It is unique, because if for another solution , then   "
},
{
  "id": "rem-non-invertible-inf-sols",
  "level": "2",
  "url": "sec-inverses-and-equations.html#rem-non-invertible-inf-sols",
  "type": "Remark",
  "number": "7.4.2",
  "title": "",
  "body": " If is not invertible, then will have infinitely many solutions or no solutions, depending on . This is because the RREF of will have at least one column without a leading entry, so if is consistent, the solution involves at least one parameter.  "
},
{
  "id": "ex-inverses-to-solve",
  "level": "2",
  "url": "sec-inverses-and-equations.html#ex-inverses-to-solve",
  "type": "Example",
  "number": "7.4.3",
  "title": "",
  "body": "  Use a matrix inverse to solve .  This is for where is the same matrix that we calculated the inverse of in . So . We conclude that there is a unique solution , , .   "
},
{
  "id": "sec-elementary-matrices",
  "level": "1",
  "url": "sec-elementary-matrices.html",
  "type": "Section",
  "number": "7.5",
  "title": "Elementary matrices",
  "body": " Elementary matrices    An elementary matrix is any matrix that can be obtained by performing a single elementary row operation an an identity matrix.          is obtained from the ERO .     is obtained from the ERO .     is obtained from the ERO .       We need to main results about elementary matrices. We present them without proof, although we will illustrate the first result with an example, and it is not too hard to see how the first result implies the second.    If is an elementary matrix obtained by performing an ERO on , then if the same ERO is performed on an matrix , the result is the product .      Every elementary matrix is invertible, and the inverse is the elementary matrix for the 'reverse' ERO.    By 'reverse' ERO we mean that will undo the original, sending the matrix back to the identity. So we have the following:  Reverse EROs       ERO  Reverse ERO                    Consider and the ERO . We check that holds with this example:         and .         We want to express as a product of elementary matrices. We do this by row reducing to the identity: We now take the corresponding elementary matrices and use to get . We can now rearrange to get . So .    "
},
{
  "id": "def-elementary-matrices",
  "level": "2",
  "url": "sec-elementary-matrices.html#def-elementary-matrices",
  "type": "Definition",
  "number": "7.5.1",
  "title": "",
  "body": "  An elementary matrix is any matrix that can be obtained by performing a single elementary row operation an an identity matrix.   "
},
{
  "id": "ex-basic-elem-matrices",
  "level": "2",
  "url": "sec-elementary-matrices.html#ex-basic-elem-matrices",
  "type": "Example",
  "number": "7.5.2",
  "title": "",
  "body": "      is obtained from the ERO .     is obtained from the ERO .     is obtained from the ERO .      "
},
{
  "id": "thm-elem-matrices-and-multiplication",
  "level": "2",
  "url": "sec-elementary-matrices.html#thm-elem-matrices-and-multiplication",
  "type": "Theorem",
  "number": "7.5.3",
  "title": "",
  "body": "  If is an elementary matrix obtained by performing an ERO on , then if the same ERO is performed on an matrix , the result is the product .   "
},
{
  "id": "thm-elem-matrices-invertible",
  "level": "2",
  "url": "sec-elementary-matrices.html#thm-elem-matrices-invertible",
  "type": "Theorem",
  "number": "7.5.4",
  "title": "",
  "body": "  Every elementary matrix is invertible, and the inverse is the elementary matrix for the 'reverse' ERO.   "
},
{
  "id": "tab-reverse-EROs",
  "level": "2",
  "url": "sec-elementary-matrices.html#tab-reverse-EROs",
  "type": "Table",
  "number": "7.5.5",
  "title": "",
  "body": " Reverse EROs       ERO  Reverse ERO                "
},
{
  "id": "ex-checking-elem-prop",
  "level": "2",
  "url": "sec-elementary-matrices.html#ex-checking-elem-prop",
  "type": "Example",
  "number": "7.5.6",
  "title": "",
  "body": "  Consider and the ERO . We check that holds with this example:         and .      "
},
{
  "id": "ex-",
  "level": "2",
  "url": "sec-elementary-matrices.html#ex-",
  "type": "Example",
  "number": "7.5.7",
  "title": "",
  "body": "  We want to express as a product of elementary matrices. We do this by row reducing to the identity: We now take the corresponding elementary matrices and use to get . We can now rearrange to get . So .   "
},
{
  "id": "sec-characterisations-of-invertibility",
  "level": "1",
  "url": "sec-characterisations-of-invertibility.html",
  "type": "Section",
  "number": "7.6",
  "title": "Characterisations of invertibility",
  "body": " Characterisations of invertibility  Text of section.  "
},
{
  "id": "sec-calculating-nxn-determinants",
  "level": "1",
  "url": "sec-calculating-nxn-determinants.html",
  "type": "Section",
  "number": "8.1",
  "title": "Calculating determinants",
  "body": " Calculating determinants  We will sometimes use straight lines to denote the determinant of the matrix matrix , and similarly to denote the determinant of matrices.    If is a matrix, define the determinant . Now let be any matrix with . For each , the - minor of , denoted by , is the matrix obtained by deleting the th row and the th column of . The determinant of is the real number .    Let's get a feel for what this definition means by working through a few examples.    Let be an arbitrary matrix. Then the minors are matrices, or numbers. Specifically, we find by deleting the first row and column of , and by deleting the first row and second column of . The determinant formula now gives . This is consistent with our previous definition of the determinant of a matrix.      If , then the determinant formula says that       The determinant of is     Calculating the determinant using this formula is called expanding along the first row , because the coefficients all come from the first row, and their corresponding minors come from deleting the first row (and some column).  In fact, the determinant can be calculated by expanding along any row or column: there is nothing special about the first row.    Let be an matrix for . Then for any , we can calculate by the expansion along the  -th row  or by the expansion along the  -th column  .    To remember the sign of each coefficient in the determinant formula, it can be helpful to imagine a checkerboard pattern of plus and minus signs, for example .  To calculate the determinant, pick any column or row, and then expand along it. When expanding, multiply each entry of the chosen column or row by its plus or minus sign from the checkboard pattern, and by the determinant of its minor.    Let . In , we calculated that by expanding along the first row. If we instead expand along the second column, we get , as before.    Expanding along a row or column with zeroes makes the calculation easier.    We will calculate the following determinant by expanding along the first column, since it's mostly zero:     "
},
{
  "id": "def-determinant",
  "level": "2",
  "url": "sec-calculating-nxn-determinants.html#def-determinant",
  "type": "Definition",
  "number": "8.1.1",
  "title": "",
  "body": "  If is a matrix, define the determinant . Now let be any matrix with . For each , the - minor of , denoted by , is the matrix obtained by deleting the th row and the th column of . The determinant of is the real number .   "
},
{
  "id": "ex-2x2-det-check",
  "level": "2",
  "url": "sec-calculating-nxn-determinants.html#ex-2x2-det-check",
  "type": "Example",
  "number": "8.1.2",
  "title": "",
  "body": "  Let be an arbitrary matrix. Then the minors are matrices, or numbers. Specifically, we find by deleting the first row and column of , and by deleting the first row and second column of . The determinant formula now gives . This is consistent with our previous definition of the determinant of a matrix.   "
},
{
  "id": "ex-det-general-3x3",
  "level": "2",
  "url": "sec-calculating-nxn-determinants.html#ex-det-general-3x3",
  "type": "Example",
  "number": "8.1.3",
  "title": "",
  "body": "  If , then the determinant formula says that    "
},
{
  "id": "ex-det",
  "level": "2",
  "url": "sec-calculating-nxn-determinants.html#ex-det",
  "type": "Example",
  "number": "8.1.4",
  "title": "",
  "body": "  The determinant of is    "
},
{
  "id": "sec-calculating-nxn-determinants-8",
  "level": "2",
  "url": "sec-calculating-nxn-determinants.html#sec-calculating-nxn-determinants-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "expanding along the first row "
},
{
  "id": "thm-det-any-row-col",
  "level": "2",
  "url": "sec-calculating-nxn-determinants.html#thm-det-any-row-col",
  "type": "Theorem",
  "number": "8.1.5",
  "title": "",
  "body": "  Let be an matrix for . Then for any , we can calculate by the expansion along the  -th row  or by the expansion along the  -th column  .   "
},
{
  "id": "ex-checking-det-expansions",
  "level": "2",
  "url": "sec-calculating-nxn-determinants.html#ex-checking-det-expansions",
  "type": "Example",
  "number": "8.1.6",
  "title": "",
  "body": "  Let . In , we calculated that by expanding along the first row. If we instead expand along the second column, we get , as before.   "
},
{
  "id": "ex-triangular",
  "level": "2",
  "url": "sec-calculating-nxn-determinants.html#ex-triangular",
  "type": "Example",
  "number": "8.1.7",
  "title": "",
  "body": "  We will calculate the following determinant by expanding along the first column, since it's mostly zero:    "
},
{
  "id": "sec-props-of-determinants",
  "level": "1",
  "url": "sec-props-of-determinants.html",
  "type": "Section",
  "number": "8.2",
  "title": "Properties of determinants",
  "body": " Properties of determinants  The following definition gives a name to matrices like whose nonzero entries form a triangular shape.    An matrix is upper triangular if all entries below the diagonal are zero (so for ), lower triangular if all entries above the diagonal are zero (so for ), and triangular if it is either upper triangular or lower triangular.    The matrix in is upper triangular. Notice that its determinant is the product of its diagonal entries. >This is true for any triangular matrix , which can be shown by expanding along the row or column which is zero apart from (possibly) one entry.    Find the determinant of the matrices .  These are triangular, so , and .    If a matrix has a row or column that is completely zero, we can expand along it to see that the determinant is zero.  The next theorem states how determinants interact with elementary row or column operations.    Let and be matrices.   If is obtained from by swapping two rows or columns, then .    If is obtained from by scaling one row or column by , then .    If is obtained from by adding a multiple of one row or column to another, then .        If is obtained from by applying a sequence of elementary row operations, then for some nonzero .    First assume that is obtained from by applying a single ERO. From , where or . Note that must be nonzero since scaling by zero is not an ERO. Thus . This proves the corollary in this case.  To prove the full corollary, we can repeatedly apply the version of it proved in the previous paragraph: will be a product of nonzero numbers and hence nonzero.    The theorem allows us to row reduce the matrix to a simpler one with more zeroes.    Find the determinant of the matrix .  Performing EROs on , we get . We have by , due to the row swap (the other operations did not affect the determinant). Thus       Let and be matrices, and let . Then               If is invertible, then and           Property 1 holds because is a triangular matrix with all diagonal entries equal to , so .  Property 2 follows from , since is obtained from by performing the sequence of EROs each of which multiply the determinant by .  We will not prove Property 3; it is beyond the scope of this course. However, if you are interested, this is proved as Theorem 4.7 of Poole's textbook.  For Property 4, suppose that is invertible. Then by Properties 1 and 3, which means that and .  Finally, Property 5 holds because expanding along the th row of gives the same number as expanding along the th column of .      Let and be invertible matrices such that and . Then     Remember that the reason we introduced the determinant was because we wanted a number which tells us whether a matrix is invertible. We can now show that this is precisely what the determinant does.    An matrix is invertible if and only if .    Consider the augmented matrix and its RREF . If is invertible, then there is a sequence of EROs that reduces to , so by applying , there is a constant such that so . (Alternatively, we already showed this in .)  On the other hand, if is not invertible, then must have a row of zeroes, so . Again applying , there is a nonzero constant such that . This shows that     "
},
{
  "id": "def-triangular-matrix",
  "level": "2",
  "url": "sec-props-of-determinants.html#def-triangular-matrix",
  "type": "Definition",
  "number": "8.2.1",
  "title": "",
  "body": "  An matrix is upper triangular if all entries below the diagonal are zero (so for ), lower triangular if all entries above the diagonal are zero (so for ), and triangular if it is either upper triangular or lower triangular.   "
},
{
  "id": "ex-det-for-tri-matrices",
  "level": "2",
  "url": "sec-props-of-determinants.html#ex-det-for-tri-matrices",
  "type": "Example",
  "number": "8.2.2",
  "title": "",
  "body": "  Find the determinant of the matrices .  These are triangular, so , and .   "
},
{
  "id": "thm-EROdet",
  "level": "2",
  "url": "sec-props-of-determinants.html#thm-EROdet",
  "type": "Theorem",
  "number": "8.2.3",
  "title": "",
  "body": "  Let and be matrices.   If is obtained from by swapping two rows or columns, then .    If is obtained from by scaling one row or column by , then .    If is obtained from by adding a multiple of one row or column to another, then .     "
},
{
  "id": "cor-EROdet",
  "level": "2",
  "url": "sec-props-of-determinants.html#cor-EROdet",
  "type": "Corollary",
  "number": "8.2.4",
  "title": "",
  "body": "  If is obtained from by applying a sequence of elementary row operations, then for some nonzero .    First assume that is obtained from by applying a single ERO. From , where or . Note that must be nonzero since scaling by zero is not an ERO. Thus . This proves the corollary in this case.  To prove the full corollary, we can repeatedly apply the version of it proved in the previous paragraph: will be a product of nonzero numbers and hence nonzero.   "
},
{
  "id": "ex-dets-through-EROs",
  "level": "2",
  "url": "sec-props-of-determinants.html#ex-dets-through-EROs",
  "type": "Example",
  "number": "8.2.5",
  "title": "",
  "body": "  Find the determinant of the matrix .  Performing EROs on , we get . We have by , due to the row swap (the other operations did not affect the determinant). Thus    "
},
{
  "id": "thm-det",
  "level": "2",
  "url": "sec-props-of-determinants.html#thm-det",
  "type": "Theorem",
  "number": "8.2.6",
  "title": "",
  "body": "  Let and be matrices, and let . Then               If is invertible, then and           Property 1 holds because is a triangular matrix with all diagonal entries equal to , so .  Property 2 follows from , since is obtained from by performing the sequence of EROs each of which multiply the determinant by .  We will not prove Property 3; it is beyond the scope of this course. However, if you are interested, this is proved as Theorem 4.7 of Poole's textbook.  For Property 4, suppose that is invertible. Then by Properties 1 and 3, which means that and .  Finally, Property 5 holds because expanding along the th row of gives the same number as expanding along the th column of .   "
},
{
  "id": "ex-det-and-matrix-algebra",
  "level": "2",
  "url": "sec-props-of-determinants.html#ex-det-and-matrix-algebra",
  "type": "Example",
  "number": "8.2.7",
  "title": "",
  "body": "  Let and be invertible matrices such that and . Then    "
},
{
  "id": "thm-invdet",
  "level": "2",
  "url": "sec-props-of-determinants.html#thm-invdet",
  "type": "Theorem",
  "number": "8.2.8",
  "title": "",
  "body": "  An matrix is invertible if and only if .    Consider the augmented matrix and its RREF . If is invertible, then there is a sequence of EROs that reduces to , so by applying , there is a constant such that so . (Alternatively, we already showed this in .)  On the other hand, if is not invertible, then must have a row of zeroes, so . Again applying , there is a nonzero constant such that . This shows that    "
},
{
  "id": "sec-span",
  "level": "1",
  "url": "sec-span.html",
  "type": "Section",
  "number": "9.1",
  "title": "Span",
  "body": " Span  Text of section.  "
},
{
  "id": "sec-linear-independence",
  "level": "1",
  "url": "sec-linear-independence.html",
  "type": "Section",
  "number": "9.2",
  "title": "Linear independence",
  "body": " Linear independence  Text of section.  "
},
{
  "id": "sec-subspaces",
  "level": "1",
  "url": "sec-subspaces.html",
  "type": "Section",
  "number": "10.1",
  "title": "Subspaces",
  "body": " Subspaces  Text of section.  "
},
{
  "id": "sec-row-and-column-spaces",
  "level": "1",
  "url": "sec-row-and-column-spaces.html",
  "type": "Section",
  "number": "10.2",
  "title": "Row and column spaces",
  "body": " Row and column spaces  Text of section.  "
},
{
  "id": "sec-null-spaces",
  "level": "1",
  "url": "sec-null-spaces.html",
  "type": "Section",
  "number": "10.3",
  "title": "Null spaces",
  "body": " Null spaces  Text of section.  "
},
{
  "id": "sec-bases",
  "level": "1",
  "url": "sec-bases.html",
  "type": "Section",
  "number": "11.1",
  "title": "Bases",
  "body": " Bases  Text of section.  "
},
{
  "id": "sec-dimension",
  "level": "1",
  "url": "sec-dimension.html",
  "type": "Section",
  "number": "11.2",
  "title": "Dimension",
  "body": " Dimension  Text of section.  "
},
{
  "id": "sec-rank-nullity-theorem",
  "level": "1",
  "url": "sec-rank-nullity-theorem.html",
  "type": "Section",
  "number": "11.3",
  "title": "The rank-nullity theorem",
  "body": " The rank-nullity theorem  Text of section.  "
},
{
  "id": "sec-evalues-evectors-espaces",
  "level": "1",
  "url": "sec-evalues-evectors-espaces.html",
  "type": "Section",
  "number": "12.1",
  "title": "Eigenvalues, eigenvectors, and eigenspaces",
  "body": " Eigenvalues, eigenvectors, and eigenspaces    Let be an matrix. Suppose that there exists a scalar and a nonzero vector such that . Then is an eigenvalue of and is an eigenvector of corresponding to .      In this definition, to calculate we are viewing as a column matrix. This is the convention that we will use to multiply vectors by matrices.   In other words, an eigenvector is a vector such that multiplying it on the left by scales it, and the eiegenvalue is the scaling factor. This is shown in .   scales its eigenvector by the corresponding eigenvalue    We have excluded from the definition of an eigenvector, because any matrix satisfies for every . However, is allowed to be an eigenvalue, and in the following definition of eigenspace, it is convenient to include the zero vector.    If is an eigenvalue of an matrix , the set is the eigenspace of corresponding to .      is the set of all eigenvectors of corresponding to , together with the zero vector . Note that if , then , since . In general, if , one can similarly show that any linear combination of these vectors remains in .     Let . Show that and are eigenvectors of , and find the corresponding eigenvalues.  By direct calculation, , so is an eigenvector of with eigenvalue , and is an eigenvector of with eigenvalue .    Given an matrix , we now show how to find its eigenvalues and eigenvectors. Since , the matrix equation rearranges to the equation .  The next theorem shows us how to find the eigenvalues of .     is an eigenvalue of if and only if .    From , if and only if is not invertible, so the theorem says that is an eigenvalue of if and only if is not invertible.  If is not invertible, then its RREF has at least one column without a leading entry, so has infinitely many solutions, so it has a nonzero solution . Rearranging, , so is an eigenvector for with corresponding eigenvalue .  On the other hand, if is invertible, then the unique solution to is (see NEEDS REF TO COI1). Since is never an eigenvector, this means cannot be an eigenvalue of .      If is an matrix, then the characteristic polynomial of is , and the characteristic equation of is .    The meaning of the theorem is summarised in the next box.    How to find eigenvalues and eigenvectors: Calculate the characteristic polynomial and find its roots, which satisfy the characteristic equation . These are all the eigenvalues of . For each eigenvalue , the eigenvectors corresponding to are the solutions to the matrix equation for , which can be solved by Gaussian elimination.    "
},
{
  "id": "def-evalue-evector",
  "level": "2",
  "url": "sec-evalues-evectors-espaces.html#def-evalue-evector",
  "type": "Definition",
  "number": "12.1.1",
  "title": "",
  "body": "  Let be an matrix. Suppose that there exists a scalar and a nonzero vector such that . Then is an eigenvalue of and is an eigenvector of corresponding to .   "
},
{
  "id": "rem-vecs-as-cols",
  "level": "2",
  "url": "sec-evalues-evectors-espaces.html#rem-vecs-as-cols",
  "type": "Remark",
  "number": "12.1.2",
  "title": ".",
  "body": "  In this definition, to calculate we are viewing as a column matrix. This is the convention that we will use to multiply vectors by matrices.  "
},
{
  "id": "fig-evec",
  "level": "2",
  "url": "sec-evalues-evectors-espaces.html#fig-evec",
  "type": "Figure",
  "number": "12.1.3",
  "title": "",
  "body": " scales its eigenvector by the corresponding eigenvalue   "
},
{
  "id": "def-eigenspace",
  "level": "2",
  "url": "sec-evalues-evectors-espaces.html#def-eigenspace",
  "type": "Definition",
  "number": "12.1.4",
  "title": "",
  "body": "  If is an eigenvalue of an matrix , the set is the eigenspace of corresponding to .   "
},
{
  "id": "rem-espace-descrip",
  "level": "2",
  "url": "sec-evalues-evectors-espaces.html#rem-espace-descrip",
  "type": "Remark",
  "number": "12.1.5",
  "title": "",
  "body": "  is the set of all eigenvectors of corresponding to , together with the zero vector . Note that if , then , since . In general, if , one can similarly show that any linear combination of these vectors remains in .  "
},
{
  "id": "ex-evector-checking",
  "level": "2",
  "url": "sec-evalues-evectors-espaces.html#ex-evector-checking",
  "type": "Example",
  "number": "12.1.6",
  "title": "",
  "body": "  Let . Show that and are eigenvectors of , and find the corresponding eigenvalues.  By direct calculation, , so is an eigenvector of with eigenvalue , and is an eigenvector of with eigenvalue .   "
},
{
  "id": "thm-evalue-char",
  "level": "2",
  "url": "sec-evalues-evectors-espaces.html#thm-evalue-char",
  "type": "Theorem",
  "number": "12.1.7",
  "title": "",
  "body": "   is an eigenvalue of if and only if .    From , if and only if is not invertible, so the theorem says that is an eigenvalue of if and only if is not invertible.  If is not invertible, then its RREF has at least one column without a leading entry, so has infinitely many solutions, so it has a nonzero solution . Rearranging, , so is an eigenvector for with corresponding eigenvalue .  On the other hand, if is invertible, then the unique solution to is (see NEEDS REF TO COI1). Since is never an eigenvector, this means cannot be an eigenvalue of .   "
},
{
  "id": "def-char-poly",
  "level": "2",
  "url": "sec-evalues-evectors-espaces.html#def-char-poly",
  "type": "Definition",
  "number": "12.1.8",
  "title": "",
  "body": "  If is an matrix, then the characteristic polynomial of is , and the characteristic equation of is .   "
},
{
  "id": "finding-evalues-evectors-1",
  "level": "2",
  "url": "sec-evalues-evectors-espaces.html#finding-evalues-evectors-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to find eigenvalues and eigenvectors: "
},
{
  "id": "sec-evalue-examples",
  "level": "1",
  "url": "sec-evalue-examples.html",
  "type": "Section",
  "number": "12.2",
  "title": "Examples",
  "body": " Examples    Find the eigenvalues of the matrix . For each eigenvalue, find all its eigenvectors, find its eigenspace, and give a specific example of an eigenvector.  The characteristic polynomial is . So the roots of the characteristic equation are and , which means these are the eigenvalues of .  For , we solve for . Row reducing, . The solutions are , , for . So the eigenvectors for are for . For the eigenspace, we include , so we can also include to get . Taking , a specific eigenvector is .  For , we solve for . Row reducing, . The solutions are , for . So the eigenvectors are for , the eigenspace is and taking gives that is an eigenvector.      Find the eigenvalues of the matrix . For each eigenvalue, find a corresponding eigenvector.  The characteristic polynomial is . So the eigenvalues of are and .  For , we solve .  The solutions are , for . Taking , is an eigenvector for .  For , .  The solutions are , , , for . Taking gives that is an eigenvector for .     If is a triangular matrix, then because is a diagonal matrix, is still triangular. If the diagonal entries of are , then is a triangular matrix with on its diagonal. Since the determinant of a triangular matrix is the product of its diagonal entries, . Therefore the solutions of the characteristic equation are .    Conclusion: The eigenvalues of a triangular matrix are its diagonal entries.     Find the eigenvalues of the matrix .   is upper triangular, so its eigenvalues are the diagonal entries , and .    "
},
{
  "id": "ex-finding-ethings1",
  "level": "2",
  "url": "sec-evalue-examples.html#ex-finding-ethings1",
  "type": "Example",
  "number": "12.2.1",
  "title": "",
  "body": "  Find the eigenvalues of the matrix . For each eigenvalue, find all its eigenvectors, find its eigenspace, and give a specific example of an eigenvector.  The characteristic polynomial is . So the roots of the characteristic equation are and , which means these are the eigenvalues of .  For , we solve for . Row reducing, . The solutions are , , for . So the eigenvectors for are for . For the eigenspace, we include , so we can also include to get . Taking , a specific eigenvector is .  For , we solve for . Row reducing, . The solutions are , for . So the eigenvectors are for , the eigenspace is and taking gives that is an eigenvector.   "
},
{
  "id": "ex-finding-ethings2",
  "level": "2",
  "url": "sec-evalue-examples.html#ex-finding-ethings2",
  "type": "Example",
  "number": "12.2.2",
  "title": "",
  "body": "  Find the eigenvalues of the matrix . For each eigenvalue, find a corresponding eigenvector.  The characteristic polynomial is . So the eigenvalues of are and .  For , we solve .  The solutions are , for . Taking , is an eigenvector for .  For , .  The solutions are , , , for . Taking gives that is an eigenvector for .   "
},
{
  "id": "evalues-tri-matrices-1",
  "level": "2",
  "url": "sec-evalue-examples.html#evalues-tri-matrices-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Conclusion: "
},
{
  "id": "ex-finding-evalues-tri-matrix",
  "level": "2",
  "url": "sec-evalue-examples.html#ex-finding-evalues-tri-matrix",
  "type": "Example",
  "number": "12.2.3",
  "title": "",
  "body": "  Find the eigenvalues of the matrix .   is upper triangular, so its eigenvalues are the diagonal entries , and .   "
},
{
  "id": "sec-evalue-multiplicities",
  "level": "1",
  "url": "sec-evalue-multiplicities.html",
  "type": "Section",
  "number": "12.3",
  "title": "Eigenvalue multiplicities",
  "body": " Eigenvalue multiplicities    Let be an matrix, and let be an eigenvalue of . If when fully factored, the characteristic polynomial has the factor , then the algebraic multiplicity of is . The geometric multiplicity of is the number of parameters appearing in .    The algebraic multiplicity of is just the number of times the factor appears in the characteristic polynomial. The geometric multiplicity is essentially the `dimension' of the eigenspace . For example, if is , then an eigenvalue has geometric multiplicity 1 if represents a line, geometric multiplicity 2 if represents a plane, or 3 if is all of .     Find the multiplicities of the eigenvalues of .  We first calculate the characteristic polynomial (by expanding across the first row) , after factoring. So the eigenvalues are and . The eigenvalue has algebraic multiplicity because of the factor . The eigenvalue has algebraic multiplicity , because it is not a repeated root.  To calculate the geometric multiplicities, we first need to calculate the eigenspaces. First we calculate for : . Let , . Then and row 1 gives that , so . So . This has 1 parameter, so the geometric multiplicity of is .  For , we solve . Let . Then and also. So the eigenspace is , which has 1 parameter, so the geometric multiplicity of is . The answer is summarised in .   Multiplicities in       Eigenvalue  Algebraic multiplicity  Geometric multiplicity                 If is , the sum of the algebraic multiplicities is (because the characteristic polynomial has degree ). In , notice that the geometric multiplicity of the eigenvalues are less than or equal to their algebraic multiplicities. In fact, this is always true.    The geometric multiplicity of an eigenvalue is less than or equal to its algebraic multiplicity.     Here's an important special case when the multiplicities are simple: suppose is a matrix with  distinct eigenvalues . This means that all the algebraic multiplicities are 1. So by , all the geometric multiplicities are less than or equal to 1. But the geometric multiplicity of an eigenvalue is always at least 1. We conclude that:  If is an matrix with distinct eigenvalues, both the algebraic and geometric multiplicity of every eigenvalue are 1.   "
},
{
  "id": "def-multiplicities",
  "level": "2",
  "url": "sec-evalue-multiplicities.html#def-multiplicities",
  "type": "Definition",
  "number": "12.3.1",
  "title": "",
  "body": "  Let be an matrix, and let be an eigenvalue of . If when fully factored, the characteristic polynomial has the factor , then the algebraic multiplicity of is . The geometric multiplicity of is the number of parameters appearing in .   "
},
{
  "id": "ex-mult",
  "level": "2",
  "url": "sec-evalue-multiplicities.html#ex-mult",
  "type": "Example",
  "number": "12.3.2",
  "title": "",
  "body": "  Find the multiplicities of the eigenvalues of .  We first calculate the characteristic polynomial (by expanding across the first row) , after factoring. So the eigenvalues are and . The eigenvalue has algebraic multiplicity because of the factor . The eigenvalue has algebraic multiplicity , because it is not a repeated root.  To calculate the geometric multiplicities, we first need to calculate the eigenspaces. First we calculate for : . Let , . Then and row 1 gives that , so . So . This has 1 parameter, so the geometric multiplicity of is .  For , we solve . Let . Then and also. So the eigenspace is , which has 1 parameter, so the geometric multiplicity of is . The answer is summarised in .   Multiplicities in       Eigenvalue  Algebraic multiplicity  Geometric multiplicity                "
},
{
  "id": "thm-gleqa",
  "level": "2",
  "url": "sec-evalue-multiplicities.html#thm-gleqa",
  "type": "Theorem",
  "number": "12.3.4",
  "title": "",
  "body": "  The geometric multiplicity of an eigenvalue is less than or equal to its algebraic multiplicity.   "
},
{
  "id": "rmk-distinct",
  "level": "2",
  "url": "sec-evalue-multiplicities.html#rmk-distinct",
  "type": "Remark",
  "number": "12.3.5",
  "title": "",
  "body": " Here's an important special case when the multiplicities are simple: suppose is a matrix with  distinct eigenvalues . This means that all the algebraic multiplicities are 1. So by , all the geometric multiplicities are less than or equal to 1. But the geometric multiplicity of an eigenvalue is always at least 1. We conclude that:  If is an matrix with distinct eigenvalues, both the algebraic and geometric multiplicity of every eigenvalue are 1.  "
},
{
  "id": "sec-characterisations-of-invertibility-take2",
  "level": "1",
  "url": "sec-characterisations-of-invertibility-take2.html",
  "type": "Section",
  "number": "12.4",
  "title": "Characterisations of invertibility (take 2!)",
  "body": " Characterisations of invertibility (take 2!)  Text of section.  "
},
{
  "id": "sec-similarity",
  "level": "1",
  "url": "sec-similarity.html",
  "type": "Section",
  "number": "13.1",
  "title": "Similarity",
  "body": " Similarity  Text of section.  "
},
{
  "id": "sec-diagonalisation",
  "level": "1",
  "url": "sec-diagonalisation.html",
  "type": "Section",
  "number": "13.2",
  "title": "Diagonalisation",
  "body": " Diagonalisation    An matrix is diagonalisable if there is an invertible matrix and a diagonal matrix such that .      If a matrix is already diagonal, intuitively it should be diagonalisable. This is true; using the definition, we can take . Then shows that is diagonalisable.    Let be an diagonalisable matrix (where is diagonal). Let where the blank elements of are zero, and the columns of are the vectors . Then implies that . Writing this out gives . The left-hand side equals , which you are asked to calculate in NEED REF below. The right-hand side equals . Comparing columns, this shows that for all . Moreover, each column is nonzero since is invertible. Therefore the eigenvectors of are (which are the columns of ) and the corresponding eigenvalues are (which are the corresponding diagonal entries of ).   Similarly, if has distinct eigenvalues such that is invertible, then is diagonalisable and , where is the diagonal matrix of eigenvalues, as above. (To see this, consisting of eigenvalues means Multiplying by , we conclude .)  We summarise the previous calculations in the following theorem.    An matrix is diagonalisable if and only if there are eigenvectors such that is invertible. In this case, for where each is the eigenvalue for , and the blank elements of are zero.    For this theorem to be useful, we need a convenient criterion for when is invertible. (We know that this is when its determinant is nonzero, but we would still need a way to check that.) In fact, it is invertible whenever our two types of multiplicity are equal.    Let be a matrix. There is an invertible matrix consisting of eigenvectors of if and only if the algebraic multiplicity of every eigenvalue equals its geometric multiplicity.    Combining and gives the following criterion, which is how we will check in practice whether a matrix is diagonalisable.    Let be an matrix. Then is diagonalisable if and only if the algebraic multiplicity of every eigenvalue equals its geometric multiplicity. In this case, where and are the same as in .    So in an example, we can calculate the eigenspaces and then check the multiplicities to see if they match. An important special case is when all the eigenvalues are different.    If is a matrix with distinct eigenvalues, then is diagonalisable.    This is because by , if has distinct eigenvalues then every eigenvalue has geometric and algebraic multiplicity equal to 1. So the multiplicities match. Then by , is diagonalisable.  "
},
{
  "id": "def-diagonalisable",
  "level": "2",
  "url": "sec-diagonalisation.html#def-diagonalisable",
  "type": "Definition",
  "number": "13.2.1",
  "title": "",
  "body": "  An matrix is diagonalisable if there is an invertible matrix and a diagonal matrix such that .   "
},
{
  "id": "ex-diag-is-diagonalisable",
  "level": "2",
  "url": "sec-diagonalisation.html#ex-diag-is-diagonalisable",
  "type": "Example",
  "number": "13.2.2",
  "title": "",
  "body": "  If a matrix is already diagonal, intuitively it should be diagonalisable. This is true; using the definition, we can take . Then shows that is diagonalisable.   "
},
{
  "id": "thm-criterion",
  "level": "2",
  "url": "sec-diagonalisation.html#thm-criterion",
  "type": "Theorem",
  "number": "13.2.3",
  "title": "",
  "body": "  An matrix is diagonalisable if and only if there are eigenvectors such that is invertible. In this case, for where each is the eigenvalue for , and the blank elements of are zero.   "
},
{
  "id": "thm-criterion-1-half",
  "level": "2",
  "url": "sec-diagonalisation.html#thm-criterion-1-half",
  "type": "Theorem",
  "number": "13.2.4",
  "title": "",
  "body": "  Let be a matrix. There is an invertible matrix consisting of eigenvectors of if and only if the algebraic multiplicity of every eigenvalue equals its geometric multiplicity.   "
},
{
  "id": "thm-criterion2",
  "level": "2",
  "url": "sec-diagonalisation.html#thm-criterion2",
  "type": "Theorem",
  "number": "13.2.5",
  "title": "",
  "body": "  Let be an matrix. Then is diagonalisable if and only if the algebraic multiplicity of every eigenvalue equals its geometric multiplicity. In this case, where and are the same as in .   "
},
{
  "id": "cor-dist-evalues",
  "level": "2",
  "url": "sec-diagonalisation.html#cor-dist-evalues",
  "type": "Corollary",
  "number": "13.2.6",
  "title": "",
  "body": "  If is a matrix with distinct eigenvalues, then is diagonalisable.   "
},
{
  "id": "sec-examples-of-diagonalisation",
  "level": "1",
  "url": "sec-examples-of-diagonalisation.html",
  "type": "Section",
  "number": "13.3",
  "title": "Examples of diagonalisation",
  "body": " Examples of diagonalisation    Is diagonalisable? If so, write out .  First, we compute the characteristic polynomial. To simplify the calculation, we will start with one step of row-reduction: . So the eigenvalues are (with algebraic multiplicity 2) and (with algebraic multiplicity 1). Next we calculate eigenspaces.  For , we have . Since the second and third rows don't have a leading entry, we need to let and , for . Then implies that . So the eigenspace is . This has 2 parameters, so the geometric multiplicity of is 2, which is equal to its algebraic multiplicity. Taking and gives that is an eigenvector, and taking and gives that is also an eigenvector (corresponding to a different parameter).  For , we have . Let , for . Then the second row gives , and the first gives . Therefore the 3-eigenspace is . This has 1 parameter, so the geometric multiplicity of is 1, which is equal to its algebraic multiplicity. Taking , an eigenvector is . Therefore both eigenvalues have geometric multiplicity = algebraic multiplicity, so is diagonalisable, and we can write as . The columns of are the eigenvectors of .  Notice that since has algebraic multiplicity 2, we needed to find 2 eigenvectors corresponding to 2 different parameters in , and the eigenvalue 2 appears twice in the diagonal matrix (in the corresponding positions to its eigenvectors in ).      Consider the matrix from . The algebraic multiplicity of the eigenvalue is 2, while its geometric multiplicity is 1. Therefore is not diagonalisable.    "
},
{
  "id": "ex-diagl",
  "level": "2",
  "url": "sec-examples-of-diagonalisation.html#ex-diagl",
  "type": "Example",
  "number": "13.3.1",
  "title": "",
  "body": "  Is diagonalisable? If so, write out .  First, we compute the characteristic polynomial. To simplify the calculation, we will start with one step of row-reduction: . So the eigenvalues are (with algebraic multiplicity 2) and (with algebraic multiplicity 1). Next we calculate eigenspaces.  For , we have . Since the second and third rows don't have a leading entry, we need to let and , for . Then implies that . So the eigenspace is . This has 2 parameters, so the geometric multiplicity of is 2, which is equal to its algebraic multiplicity. Taking and gives that is an eigenvector, and taking and gives that is also an eigenvector (corresponding to a different parameter).  For , we have . Let , for . Then the second row gives , and the first gives . Therefore the 3-eigenspace is . This has 1 parameter, so the geometric multiplicity of is 1, which is equal to its algebraic multiplicity. Taking , an eigenvector is . Therefore both eigenvalues have geometric multiplicity = algebraic multiplicity, so is diagonalisable, and we can write as . The columns of are the eigenvectors of .  Notice that since has algebraic multiplicity 2, we needed to find 2 eigenvectors corresponding to 2 different parameters in , and the eigenvalue 2 appears twice in the diagonal matrix (in the corresponding positions to its eigenvectors in ).   "
},
{
  "id": "ex-diagl2",
  "level": "2",
  "url": "sec-examples-of-diagonalisation.html#ex-diagl2",
  "type": "Example",
  "number": "13.3.2",
  "title": "",
  "body": "  Consider the matrix from . The algebraic multiplicity of the eigenvalue is 2, while its geometric multiplicity is 1. Therefore is not diagonalisable.   "
},
{
  "id": "sec-apps-of-diagonalisation",
  "level": "1",
  "url": "sec-apps-of-diagonalisation.html",
  "type": "Section",
  "number": "13.4",
  "title": "Applications of diagonalisation",
  "body": " Applications of diagonalisation  One of the useful things about diagonalisation is that it allows us to quickly compute large powers of matrices. If , then most of the and terms will cancel: we have . Similarly, for any integer power , we have . Recall that if is a diagonal matrix, the power can be computed simply by taking the th power of each diagonal entry. Then we just need to multiply it by (on the left) and (on the right) to find .    Use diagonalisation to calculate where .  In , we saw that is diagonalisable, with . Therefore . This could be simplified further by evaluating the inverse and the matrix products.    "
},
{
  "id": "ex-power-using-diagl",
  "level": "2",
  "url": "sec-apps-of-diagonalisation.html#ex-power-using-diagl",
  "type": "Example",
  "number": "13.4.1",
  "title": "",
  "body": "  Use diagonalisation to calculate where .  In , we saw that is diagonalisable, with . Therefore . This could be simplified further by evaluating the inverse and the matrix products.   "
},
{
  "id": "sec-prob-vectors-and-stochastic-matrices",
  "level": "1",
  "url": "sec-prob-vectors-and-stochastic-matrices.html",
  "type": "Section",
  "number": "14.1",
  "title": "Probability vectors and stochastic matrices",
  "body": " Probability vectors and stochastic matrices  Text of section.  "
},
{
  "id": "sec-markov-chains",
  "level": "1",
  "url": "sec-markov-chains.html",
  "type": "Section",
  "number": "14.2",
  "title": "Markov chains",
  "body": " Markov chains  Text of section.  "
},
{
  "id": "sec-steady-state-vectors",
  "level": "1",
  "url": "sec-steady-state-vectors.html",
  "type": "Section",
  "number": "14.3",
  "title": "Steady state vectors",
  "body": " Steady state vectors  Text of section.  "
},
{
  "id": "sec-regular-markov-chains",
  "level": "1",
  "url": "sec-regular-markov-chains.html",
  "type": "Section",
  "number": "14.4",
  "title": "Regular Markov chains",
  "body": " Regular Markov chains  Text of section.  "
},
{
  "id": "sec-pop-models-and-leslie-matrices",
  "level": "1",
  "url": "sec-pop-models-and-leslie-matrices.html",
  "type": "Section",
  "number": "15.1",
  "title": "Population models and Leslie matrices",
  "body": " Population models and Leslie matrices  Text of section.  "
},
{
  "id": "sec-long-term-behaviour",
  "level": "1",
  "url": "sec-long-term-behaviour.html",
  "type": "Section",
  "number": "15.2",
  "title": "Long term behaviour",
  "body": " Long term behaviour  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
