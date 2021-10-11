let shortcutData = [];

const addShortcut = () => {
    const newShortcut = {
        id: `${Date.now()}`,
        tag: document.getElementById("name").value, 
        imageurl: document.getElementById("imageURL").value,
        pageurl: document.getElementById("pageURL").value
    };

shortcutContents = document.getElementById("scRow");
shortcutContents.insertAdjacentHTML('beforeend', createshortcut(newShortcut)); 

shortcutData.push(newShortcut);
saveToLocalStorage();
}

const createshortcut = ({id, tag, imageurl, pageurl})
    return(`<div class="col-md-6 col-lg-4 mt-3">
    <div class="card bg-black" style="width: 9rem; height: 12rem">
      <div class="card-header">
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-outline-light mb-3">
            <i class="fa fa-pencil-alt"></i>
          </button>
          <button type="button" class="btn btn-outline-light mb-3">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
      <img style="border-radius: 100%" 
        src="./assets/log.jfif"
        class="card-img-top"
        alt="image"
      />
      <div class="card-body">
        <h5 class="card-name ">Name</h5>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-outline-light float-end">
          Open
        </button>
      </div>
    </div>
  </div>`)