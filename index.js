let shortcutData = [];
let shortcutContents = document.getElementById("scRow");

const addShortcut = () => {
    const newShortcut = {
        id: `${Date.now()}`,
        tag: document.getElementById("name").value, 
        imageurl: document.getElementById("imageURL").value,
        pageurl: document.getElementById("pageURL").value
    };


shortcutContents.insertAdjacentHTML('beforeend', createShortcut(newShortcut)); 

shortcutData.push(newShortcut);
saveToLocalStorage();
}

const createShortcut = ({id, tag, imageurl, pageurl}) => {
    return(`<div class="d-flex align-items-center col-md-6 col-lg-4" id=${id} key=${id} style="width:15rem; height:10rem; margin-top:7.5rem; margin-right: 1rem;">
    <div class=" card bg-black ">
      <div class="card-header">
        <div class="d-flex justify-content-end">
          <button name=${id} onclick="deleteShortcut(this)" type="button"  class="btn btn-outline-light">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
      <img
        src="${imageurl}"
        class="card-img-top"
        alt="image"
        style="background-color:black;"
      />
      <div class="card-body">
        <h6 class="card-title" style="color:white">${tag}</h6>
      </div>
      <div class="card-footer">
      <a href="${pageurl}" target="_blank" >
        <button type="button" class="btn btn-outline-light float-end">
      Open
    </button></a>
      </div>
    </div>
  </div>`)
}

const saveToLocalStorage = () => {
  localStorage.setItem("shortcuts",JSON.stringify({shortcut: shortcutData}));
}

const reloadShortcut = () => {
  const localStorageCopy = JSON.parse(localStorage.getItem("shortcuts"));
  if(localStorageCopy) {
    shortcutData = localStorageCopy["shortcut"]
  }
  shortcutData.map((data) =>{
    shortcutContents.insertAdjacentHTML('beforeend', createShortcut(data));
  })
}

const deleteShortcut = (e) => {
  const targetID = e.getAttribute("name");
  shortcutData = shortcutData.filter((data) => data.id!==targetID);
  saveToLocalStorage();
  window.location.reload();
}
