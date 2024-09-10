chrome.contextMenus.removeAll(function() {
  chrome.contextMenus.create({
      title: "menu name", 		// name shown on right click
      contexts: ["all"], 		// when to show menu, i.e. on a page, link ...
      id: "id"					// id number 
  })
})

chrome.contextMenus.onClicked.addListener((info,tab) =>{
	// code when menu is clicked 
	// info gives information about page/link
	// tab gives information about tab like the title
})

