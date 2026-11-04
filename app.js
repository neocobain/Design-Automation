
function generate() {

    let site =
        document.getElementById("site").value;

    let project =
        document.getElementById("project").value;

    let router =
        document.getElementById("router").value;

    let firewall =
        document.getElementById("firewall").value;


    document.getElementById("result").innerHTML =
    `
    <div class="card">

        <h2>Design Created</h2>

        <p>
            Project:
            ${project}
        </p>

        <p>
            Site:
            ${site}
        </p>

        <p>
            Router:
            ${router}
        </p>

        <p>
            Firewall:
            ${firewall}
        </p>

    </div>
    `;
}