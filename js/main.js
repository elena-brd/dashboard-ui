const button = document.querySelector('.btn');
const dashboard = document.querySelector('.dashboard-container');


button.addEventListener('click', (e) => {
    e.preventDefault();
    dashboard.style.background = '#192a51';
    dashboard.style.color = '#fff';
    dashboard.style.width = '960px';
    dashboard.style.height = '400px';
    dashboard.style.textAlign = 'center';
    dashboard.style.paddingTop = '10rem';
    dashboard.style.lineHeight = '1.5';
    dashboard.style.borderRadius = '5px';
    dashboard.innerHTML = '<h2>This page is not available at the moment</h2> <p>This may be because of a technical error that we are working to get fixed. Try reloading this page</p>'

});