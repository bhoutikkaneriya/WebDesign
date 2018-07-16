
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
  
    var siteName = document.getElementById('sitename').value;
    var siteURL = document.getElementById('siteurl').value;
    
    var bookmark ={
        name: siteName,
        url: siteURL
    }
    
    if(!siteName || !siteURL){
        alert("please fill in the form");
        return false;
    }
    
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    
    if(!siteURL.match(regex)){
        alert("please use valid URL");
        return false;
    }
    
//local storage test
    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        bookmarks.push(bookmark);
        
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        
    }
    else{
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
       bookmarks.push(bookmark);
       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        
    }
    
    fetchbookmarks();
    e.preventDefault();
}

function deleteBookmark(url){
    
   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(var i = 0; i< bookmarks.length; i++){
        
        if(bookmarks[i].url == url){
            
            bookmarks.splice(i,1)
            
        }
        
    }
     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchbookmarks();
       
    
}
    
    function fetchbookmarks(){
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        var BookmarksResult = document.getElementById('BookmarksResult');
        
        BookmarksResult.innerHTML = '';
        
        for(var i = 0; i< bookmarks.length; i++){
             
            var name = bookmarks[i].name;
            var url = bookmarks[i].url;
            
            BookmarksResult.innerHTML +='<div class="well well-lg">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
        }
    }

    
