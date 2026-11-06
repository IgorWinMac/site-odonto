document.addEventListener("DOMContentLoaded", function () {

    const tratamentos = document.querySelectorAll(
        ".tratamentos-container article"
    );

    tratamentos.forEach((tratamento, index) => {

        setTimeout(() => {
            tratamento.classList.add("show");
        }, index * 200);

    });

});