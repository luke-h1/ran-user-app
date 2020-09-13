const btn = document.getElementById('btn');
const results = document.getElementById('output');
const img = document.querySelector('.loading-img');

function setLoadingTrue() {
  img.style.display = 'block';
}

function setLoadingFalse() {
  img.style.display = 'none';
}

async function fetchUsers() {
  setLoadingTrue();
  const BASE_URL = `https://randomuser.me/api/?results=50`;
  const res = await fetch(`${BASE_URL}`);
  const json = await res.json();
  console.log(json);
  showDataDOM(json);
}

function showDataDOM(json) {
  let output = '';
  setLoadingFalse();
  json.results.forEach((user) => {
    output += `
    <div class="wrapper"> 
    <img src="${user.picture.medium}" class="card--img"/> 
    <ul class="list">
      <li class="collection-item">Gender: ${
        user.gender ? user.gender : ''
      } </li>
      <li class="collection-item">name:${
        user.name.first ? user.name.first : ''
      } </li>
      <li class="collection-item">location: ${
        user.location.city ? user.location.city : ''
      }</li>
      <li class="collection-item">email: ${user.email ? user.email : ''}</li>
      <li class="collection-item">UUID: ${
        user.login.uuid ? user.login.uuid : ''
      }</li>
    </ul>
    </div> 
    `;
  });
  results.innerHTML = output;
}

// EVENT LISTENERS
btn.addEventListener('click', fetchUsers);
