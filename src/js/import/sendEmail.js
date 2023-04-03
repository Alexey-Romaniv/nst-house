const form = document.querySelector(".form");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const number = document.querySelector("#number").value;
    const comment = document.querySelector("#comment").value;

    const apiKey = "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";
    const url = "https://api.sendgrid.com/v3/mail/send";

    const data = {
        personalizations: [{
            to: [{email: "romaniv328@gmail.com"}],
            subject: `Сообщение от ${name}`
        }],
        from: {email: "romaniv328@gmail.com"},
        content: [{type: "text/plain", value: `name: ${name}\n email: ${email}\n number: ${number}\n comment: ${comment}`}]
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                alert("Сообщение успешно отправлено!");
                document.querySelector("#name").value = "";
                document.querySelector("#email").value = "";
                document.querySelector("#number").value = "";
                document.querySelector("#comment").value = "";
            } else {
                alert("Ошибка отправки сообщения.");
            }
        })
        .catch(error => {
            alert("Ошибка отправки сообщения.");
            console.error(error);
        });
});