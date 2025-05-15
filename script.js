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