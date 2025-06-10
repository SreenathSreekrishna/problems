const problems = [
    {
        statement: "What is the probability that a Fibonacci number is divisible by 2024? (The Fibonacci sequence is defined by $F_0 = 0$, $F_1 = 1$, and $F_n = F_{n-1} + F_{n-2}$ for $n \\geq 2$.)",
        rating: 3
    },
    {
        statement: "Let a sequence $a_n$ be defined by $a_0=2009, a_1=2023$ and $a_{n+1}=|a_n-a_{n-1}|$ for $n \\geq 1$. Find $\\sum_{i=0}^{2024} a_i$.",
        rating: 4
    },
    {
        statement: "Find the smallest possible perimeter of a scalene triangle whose side lengths are all perfect cubes.",
        rating: 3
    },
    {
        statement: "In $\\triangle ABC$, $AB=6$, $BC=9\\sqrt{2}-3\\sqrt{6}$, and $CA=6\\sqrt{3}-6$. Let $P_1$ be the point on $BC$ such that $\\angle AP_1C=60^\\circ$. Let $P_2$ be the point on $CA$ such that $\\angle P_1P_2C=60^\\circ$. Let $P_3$ be the point on $BC$ such that $\\angle P_2P_3C=60^\\circ$. This process continues until $P_{2024}$ is defined. Find the length of $P_{2023}P_{2024}$.",
        rating: 4
    },
    {
        statement: "Let a function $f: \\mathbb{N} \\to \\mathbb{N}$ be defined by $f(x)<f(y)$ if $x<y$ and $2^{f(x)} = f(2x)^2$ for all $x \\in \\mathbb{N}$. Find the minimum possible value of $f(11)$.",
        rating: 4
    },
    {
        statement: "Find the sum of the digits of $(2^{2024}+1)^{13}$ when expressed in binary.",
        rating: 5
    },
    {
        statement: "Let $p(x)$ be a quadratic polynomial with integer coefficients such that the distance of the point on the graph of $p(x)$ at $x=p(0)$ from the origin is 2024. Find the largest possible value of $p(42)$.",
        rating: 5
    },
    {
        statement: "Let $p(x)=(x-1)(x-2)(x-3)...(x-42)$. Let $q(x)=(x-1)(x-2)(x-3)...(x-38)$. Let $A$ be a point of intersection of the graphs of $p(x)$ and $q(x)$. Let $B$ be a point of intersection of the graphs of $p(x)$ and the x-axis. Let $C$ be a point of intersection of the graphs of $q(x)$ and the x-axis. If the area of triangle $ABC$ is maximized, find the $x$-coordinate of point $A$.",
        rating: 5
    },
    {
        statement: "Let $f_1(n)=n$ for all $n \\in \\mathbb{N}$. For $k \\geq 1$, let $f_{k+1}(n)=f_k(n+1)^2-f_k(n)^2$. Find $f_{42}(2024)$.",
        rating: 4
    },
    {
        statement: "Let $ABCD$ be a rhombus with side length $42$. Find the sum of the possible integer lengths of $AC$.",
        rating: 3
    },
    {
        statement: "Find the sum of all rational roots of $p(x)=\\prod_{k=0}^{2024} (x^2 - kx + 42k)$.",
        rating: 4
    },
    {
        statement: "Find a four digit number $\\overline{abcd}$ such that $a^b c^d = \\overline{abcd}$.",
        rating: 6
    },
    {
        statement: "Let $x_n$ be a sequence of strictly positive real numbers defined by $x_1=\\frac{1}{2}$ and $\\frac{x_n-1}{x_n+1} = (1 - \\frac{1}{x_{n+1}})(1 + \\frac{1}{x_{n+1}})$ for all natural numbers $n$. Find the value of $x_{2024}$.",
        rating: 4
    },
    {
        statement: "Consider a mathematical operation on a natural number $n$ to be either $42n$ or $n+1$. Find the least number of operations needed to transform $1$ into $2024^3$.",
        rating: 4
    },
    {
        statement: "Let $p(x)=\\prod_{n=0}^{\\infty} \\sum_{k=1}^{\\infty} \\frac{x^{k-1}}{k^n}$. Find the coefficient of $x^5$ in $p(x)$.",
        rating: 7
    },
    {
        statement: "Let $N$ be the number of positive integers $n<10^{42}$ such that the sum of the digits of $n$ is divisible by 11. Find the sum of the digits of $N$.",
        rating: 6
    },
    {
        statement: "Let $f$ be a function defined on the set of non-negative integers such that $f(n)$ is equal to the remainder when the ($2024^n$)th prime number is divided by 42. Find the sum of all the integers in the range of $f(n)$.",
        rating: 4
    },
    {
        statement: "Let $A$ be the difference in the areas under the graphs of $y=\\lfloor x^2\\rfloor$ and $y=(\\lfloor x \\rfloor)^2$ from $x=0$ to $x=42$. Find $\\lfloor \\frac{A}{42} \\rfloor$.",
        rating: 6
    },
    {
        statement: "In how many ways (taking an arbitrary number of moves) can a queen starting on 'a1' on a chessboard move to 'd4' if it cannot go backwards (in rank or in file)?",
        rating: 4
    },
    {
        statement: "Let $ABCD$ be the regular tetrahedron with side length $42$. Find the volume of the region defined by all points within 1 unit of a point on or inside the tetrahedron.",
        rating: 4
    },
    {
        statement: "Find the value of $\\sum_{n=1}^{2024} (-n^n + \\sum_{k=0}^{n}{n\\choose k} (n^{n-k}+n^{k+1}))$.",
        rating: 3
    },
    {
        statement: "Let $\\triangle ABC$ be an equilateral triangle with integer side length. This triangle is subdivided into $2024$ smaller equilateral triangles of integer side lengths (which may or may not be equal). If the area of $\\triangle ABC$ is minimum, find the maximum possible value of the sum of the perimeters of the $2024$ smaller triangles.",
        rating: 5
    },
    {
        statement: "Find the last three digits of $2024^{2024!}$",
        rating: 4
    },
    {
        statement: "Let $f(x)=\\lfloor \\sqrt[42]{x} \\rfloor$. Define $f_n(x)=f(f_{n-1}(x))$ for $n \\geq 1$, $f_1(x)=f(x)$. Find the number of integer solutions to $f_{2024}(x)=1$.",
        rating: 3
    },
    {
        statement: "What is the area between the curve $y=\\sqrt{1-x-x^2}$ and the x-axis?",
        rating: 4
    },
    {
        statement: "A tree starts off with a single shoot. The shoot has an equal probability of growing 0,1,2 or 3 branches. Now, the process is repeated for each new branch. This process continues until all branches randomly grow 0 branches, terminating the process. What is the probability that the tree terminates with exactly 10 branches (including the initial shoot, branches, and sub-branches)?",
        rating: 6
    },
    {
        statement: "Find the number of ordered pairs of positive integers $(a,b)$ such that $a+b \\leq 42$, $\\gcd(a,b) \\neq a$, and $\\gcd(a^a,b^b)=a^a$.",
        rating: 4
    },
    {
        statement: "Let the order of a natural number $n$ be defined as the product of the exponents of the prime factors of $n$. For example, the order of $12$ is $2 \\cdot 1 = 2$. Find the order of the order of the order of $(42!)^{42!}$",
        rating: 4
    },
    {
        statement: "For how many integers $1 \\leq n \\leq 2024$ is $\\sum_{k=1}^{n} 4^k \\cdot k^4$ divisible by 42?",
        rating: 6
    },
    {
        statement: "What is the least positive integer $n$ such that $n=2^{s(n)+3}-3s(n)$, where $s(n)$ is the sum of the digits of $n$ in base 10?",
        rating: 3
    },
    {
        statement: "Let $s(n)$ be the sum of the squares of the digits of $n$. Let $a_n$ be the sequence defined by $a_1=42$ and $a_{n+1}=s(a_n)$. Find the value of $a_{2024}$.",
        rating: 4
    },
    {
        statement: "An ant walks 1m north and turns 60 degrees clockwise. It then walks 2m and turns 60 degrees clockwise. It continues this process, walking $n$ meters and turning 60 degrees clockwise. Find the distance from the starting point to the ant's position after $2024$ steps (after it eventually walks 2024m in one go).",
        rating: 5
    },
    {
        statement: "Let $a,b$ be integers such that $0<b<a$ and $(4^a+4^b)(\\frac{1}{a} + \\frac{1}{b}) + 2^{a+b+1}(\\frac{1}{a} - \\frac{1}{b}) = \\frac{4^{a+1}}{a+b}$. Find the minimum possible value of $ab$.",
        rating: 5
    },
    {
        statement: "A sphere of radius $42$ is placed on an infinite flat plane. A point sized light source is placed at a distance of $16$ from the surface of the sphere such that the line connecting the light and the center of the sphere is perpendicular to the plane. Find the area of the shadow cast by the sphere on the plane.",
        rating: 3
    },
    {
        statement: "Find the area between the graphs of $||x|-|y||=1$ and $x^2+y^2=4$.",
        rating: 4
    },
    {
        statement: "A standard 3x3 rubik's cube is present in its solved state. For each of its eight corners, one of the following three actions is performed uniformly at random: (1) the corner is twisted clockwise, (2) the corner is twisted counterclockwise, or (3) the corner is left as is. Find the probability that the cube is still solvable after these actions using standard turns (without twisting corners or taking apart the cube).",
        rating: 5
    },
    {
        statement: "A circle of radius $1cm$ made of paper is folded along a randomly chosen chord. What is the probability that the area of the resulting shape is less than $\\frac{10\\pi+3\\sqrt{3}}{12}$?",
        rating: 4
    },
    {
        statement: "Let $f(x) : [0,1] \\rightarrow [0,1]$ be a function that first converts $x$ into base 3, and then re-interprets these base-3 digits in base 10. For example, $f(\\frac{1}{2}) = f(0.1111..._3) = 0.1111..._{10} = \\frac{1}{9}$. Find the value of the integral $\\int_0^1 f(x) dx$.",
        rating: 5
    },
    {
        statement: "Find the sum of the integers $n>1$ with the following property: for every multiple of $n$, the sum of the digits of that multiple taken 5 at a time from the right is also a multiple of $n$. For example, 3 has this property as for any multiple of 3, such as 202520252025, the sum 20 + 25202 + 52025 = 77247 is also a multiple of 3.",
        rating: 4
    },
    {
        statement: "What is the sum of all $x \\in \\mathbb{Z}^{+}$ such that for some prime $p$, $339^p - 2025 = x^2$?",
        rating: 4
    },
    {
        statement: "What is the product of the non-zero digits of the smallest perfect square greater than $10^{2024}$ whose sum of digits is not a perfect square?",
        rating: 3
    },
    {
        statement: "What is the 2025th positive integer $x$ such that $42x^2 + 1$ is a perfect square?",
        rating: 6
    },
    {
        statement: "What is the largest integer less than 2025 that can be expressed as the product of the digits of an integer $n$?",
        rating: 3
    },
    {
        statement: "Let $n=\\frac{10^a + 10^b + 10^c}{3}$ for distinct non-negative integers $a$, $b$, and $c$. Find the minimum possible value of $a+b+c$ such that the sum of the digits of $n$ is $2^{2024}$.",
        rating: 5
    },
    {
        statement: "Find the sum of all positive integers $n$ such that $n \\times 2^n$ has exactly $2024$ positive divisors.",
        rating: 4
    },
    {
        statement: "Let $A_n$ be the area of the region formed by the zeroes of the polynomial $p(x) = \\sum_{k=0}^{n} 42^{n-k}x^k$ in the complex plane. Find $lim_{n \\to \\infty} A_n$.",
        rating: 4
    },
    {
        statement: "Let $S$ be the set of all numbers that can be expressed as $2^a + 2^b + 2^c$ for $a,b,c \\in \\mathbb{Z}^{+}$. Find the 2025th smallest element of $S$.",
        rating: 5
    },
    {
        statement: "Let there be three circles such that each of the circles passes through the center of the other two circles. The radius of each circle is $1$. Find the area of the smallest circle that contains all three circles.",
        rating: 3
    },
    {
        statement: "A positive real number $k$ is chosen and a marker is placed at the point $(n,nk)$ for each positive integer $n$. The distance between two markers whose $x$-coordinate differs by $4$ is 70. What is the distance between the markers at $(42,42k)$ and $(2024,2024k)$?",
        rating: 2
    },
    {
        statement: "Let a,b,c,d be positive integers such that $a^2 + b^2 + c^2 = 42 \\times 2^d$. Find the number of tuples (a,b,c,d) such that $a+b+c+d \\leq 2025$.",
        rating: 5
    },
];

// Create a container to hold the problem divs
const container = document.createElement('div');
container.className = 'problems-container';

// Function to render problems based on the selected rating range
function renderProblems() {
    // Clear the container
    container.innerHTML = '';

    // Get the selected rating range
    const startRating = parseInt(document.getElementById('start-rating').value, 10);
    const endRating = parseInt(document.getElementById('end-rating').value, 10);

    // Filter and display problems within the selected rating range
    problems
        .filter(problem => problem.rating >= startRating && problem.rating <= endRating)
        .forEach((problem) => {
            const problemDiv = document.createElement('div');
            problemDiv.className = 'problem-item';

            const questionNumber = document.createElement('span');
            questionNumber.className = 'problem-number';
            questionNumber.textContent = `Q${problems.indexOf(problem) + 1}: `;

            const statementSpan = document.createElement('span');
            statementSpan.className = 'problem-statement';
            statementSpan.textContent = problem.statement;

            const ratingSpan = document.createElement('span');
            ratingSpan.className = 'problem-rating';
            ratingSpan.textContent = ` Difficulty: ${problem.rating}`;

            problemDiv.appendChild(questionNumber);
            problemDiv.appendChild(statementSpan);
            problemDiv.appendChild(ratingSpan);
            container.appendChild(problemDiv);
        });
    if (window.MathJax) {
        MathJax.Hub.Typeset([container]);
    }
}

// Append the container to the body
document.body.appendChild(container);

// Add event listeners to the rating dropdowns
document.getElementById('start-rating').addEventListener('change', renderProblems);
document.getElementById('end-rating').addEventListener('change', renderProblems);

// Initial render
renderProblems();