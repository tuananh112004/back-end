const buttonsStatus = document.querySelectorAll("[button-status]");
if(buttonsStatus.length > 0){
    const url = new URL(window.location.href);
    buttonsStatus.forEach(button =>{
        button.addEventListener("click",() => {
            const status = button.getAttribute("button-status");
            if(status !=""){
                url.searchParams.set("status",status);
            }
            else{
                url.searchParams.delete("status");
            }
            window.location.href= url.href;
        });
    })
}
// form search
const formSearch = document.querySelector("#form-search");
if(formSearch){
    formSearch.addEventListener("submit",(e) =>{
        e.preventDefault();
        const value = e.target.elements.keyword.value;
        const url = new URL(window.location.href);
        if(value !=""){
            url.searchParams.set("keyword",value);
        }
        else{
            url.searchParams.delete("keyword");
        }  
        window.location.href= url.href;
    });

}
// end form

// pagination
    const buttonsPagination=document.querySelectorAll("[button-pagination]");
    if(buttonsPagination.length >0){
        const url = new URL(window.location.href);
        buttonsPagination.forEach(button => {
            button.addEventListener("click",()=>{
                const page = button.getAttribute("button-pagination");
                url.searchParams.set("page",page);
                window.location.href= url.href;
            });
        });
    }
// end pagination

// change status
const buttonsChangeStatus = document.querySelectorAll("[button-change-status]");
if(buttonsChangeStatus.length > 0){
    buttonsChangeStatus.forEach(button =>{
        const formChangeStatus =document.querySelector("#form-change-status");
        const path = formChangeStatus.getAttribute("data-path");
        button.addEventListener("click",()=>{
            const statusCurrent = button.getAttribute("data-status");
            const id = button.getAttribute("data-id");
            const statusChange = statusCurrent == "active" ? "inactive" :"active";
            const action =path + `/${statusChange}/${id}?_method=PATCH`;
            
            formChangeStatus.action= action;
            formChangeStatus.submit();

        });
       
    });
}
// end

// Multi-checkBox
const checkboxMulti= document.querySelector("[checkbox-multi]");
if(checkboxMulti){
    const checkAll= checkboxMulti.querySelector("input[name='checkAll']");
    const checkId= checkboxMulti.querySelectorAll("input[name='id']");
    checkAll.addEventListener("click",()=>{
        if(checkAll.checked== true){
            checkId.forEach(button =>{
                button.checked=true;
            });
        }
        else{
            checkId.forEach(button =>{
                button.checked=false;
            });    
        }
    });
    checkId.forEach(button=>{
        button.addEventListener("click",()=>{
            const count = checkboxMulti.querySelectorAll("input[name='id']:checked").length;
            if(count==checkId.length){
                checkAll.checked=true;
            }
            else{
                checkAll.checked =false;
            }
        });
    });

}
// end

// form change-multi
const formChangeMulti = document.querySelector("[form-change-multi]");

if(formChangeMulti){
    formChangeMulti.addEventListener("submit",(e)=>{  
        e.preventDefault();
        const checkboxMulti= document.querySelector("[checkbox-multi]");
        const checkId= checkboxMulti.querySelectorAll("input[name='id']:checked");
        const typeChange = e.target.elements.type.value;   
        if(checkId.length >0){
            let ids=[];
            checkId.forEach(button =>{
                const id= button.value;
                if(typeChange=="change-position"){
                    const position=button.closest("tr").querySelector("input[name='position']").value;
                    ids.push(`${id}-${position}`);
                }
                else{
                    ids.push(button.value);
                }
            });   
        const changes = formChangeMulti.querySelector("input[name='ids']");
        changes.value=ids.join(", ");
           formChangeMulti.submit();
        }
    });
}
//end

// xoa cung
  const deleteButtons = document.querySelectorAll("[button-delete]");
// if(deleteButtons.length){
//     deleteButtons.forEach(button =>{
//         button.addEventListener("click",()=>{
//             const formDelete = document.querySelector("#form-delete-item");
//             const path = formDelete.getAttribute("data-path");
//             const confirmss =confirm("ban co muon chac chan xoa san pham nay");
//             if(confirmss){
//                 const id = button.getAttribute("data-id");
//                 const action = path +`/${id}?_method=DELETE`;
//                 formDelete.action=action;
//                 formDelete.submit();
//             }
//         });
//     });
// }
// end

//xoa mem
if(deleteButtons.length){
    deleteButtons.forEach(button =>{
        button.addEventListener("click",()=>{
            const formDelete = document.querySelector("#form-delete-item");
            const path = formDelete.getAttribute("data-path");
            const confirmss =confirm("ban co muon chac chan xoa san pham nay");
            if(confirmss){
                const id = button.getAttribute("data-id");
                const action = path +`/${id}?_method=DELETE`;
                formDelete.action=action;
                formDelete.submit();
            }
        });
    });
}
// end

//show Alert
const showAlert = document.querySelector("[show-alert]");
if(showAlert){
    
    const time =parseInt(showAlert.getAttribute("data-time")) || 3000;
    const closeAlert = showAlert.querySelector("[close-alert]");

    setTimeout(()=>{
        showAlert.classList.add("alert-hidden");
    },time);
    closeAlert.addEventListener("click",() => {
        showAlert.classList.add("alert-hidden");
    });
}
// end

// show preview
const uploadImage = document.querySelector("[upload-image]");

if(uploadImage){
    const uploadImageInput = uploadImage.querySelector("[upload-image-input]");
    
    const uploadImagePreview= uploadImage.querySelector("[upload-image-preview]");
    console.log(uploadImagePreview);
    uploadImageInput.addEventListener("change",(e) =>{
        if(e.target.files.length){
            const image = URL.createObjectURL(e.target.files[0]);
            uploadImagePreview.src= image;
        }
    });
}
//end