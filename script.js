// Time
const time = document.querySelector('#time');
function update_time() {
    const t = new Intl.DateTimeFormat('default', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    }).format(new Date());
    time.innerHTML = t;
    setTimeout(update_time, 1000);
}
update_time();

// Function for the date, probably don't need to update regularly
document.querySelector('#date').innerText = Intl.DateTimeFormat(navigator.language, { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date());

let tot = [];
SECTIONS.forEach((sec) => {
    res = [];
    sec.tabs.forEach((site) => {
        res.push(
            `
            <a href=${site.url} target="_blank">
                <div class="link">
                    <img src="${site.img}" />
                </div>
            </a>
            `
        );
    });
    tot.push(res.join(''));
});
document.querySelector('#sections-wrap').innerHTML = tot.join('');