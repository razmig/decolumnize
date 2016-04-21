# DECOLUMNIZE
This is a small bookmarklet to allow you to show/hide Jira board columns

# How to youse


 1. Create a new bookmark (Right click on the bookmark bar) and the choose 'Add a page'
 2. Fill 'DECOLUMNIZE' in the 'Name field'
 3. Copy the below link into the 'URL' field
 4. Save
 5. Open Jira board
 6. Click on the bookmark you created
 7. Enjoy
```javascript
 javascript:void%20function(){(function(){var%20e=function(){$(%22%23decolumnize_bar%22).length||(n(),a())},n=function(){{var%20e=$('%3Cdiv%20id=%22decolumnize_bar%22%3E%3Cdiv%3E'),n=$(%22[data-id]%22);$(%22%23ghx-column-header-group%22)}n.each(function(n,a){var%20t=$(a).find(%22h2%22).text(),i=$(a).data(%22id%22);e.append('%3Clabel%20style=%22margin-right:10px;%22%3E%3Cinput%20id=%22jira_column_checkbox%22%20type=%22checkbox%22%20name=%22'+t+'%22%20value=%22'+i+'%22%20checked%3E'+t+%22%3C/label%3E%22)}),e.css({background:%22%232e3d54%22,padding:%2210px%22,color:%22%23fff%22,position:%22fixed%22,bottom:0,%22z-index%22:9999999}),$(%22body%22).prepend(e)},a=function(){$(document).on(%22click%22,%22%23jira_column_checkbox%22,t)},t=function(e){var%20n=$(e.target).val(),a=$(%22[data-column-id=%22+n+%22]%22);$column_label=$(%22[data-id=%22+n+%22]%22),a.is(%22:visible%22)%3Fi(a,$column_label):c(a,$column_label)},i=function(e,n){e.css(%22display%22,%22none%22),n.css(%22display%22,%22none%22)},c=function(e,n){e.css(%22display%22,%22table-cell%22),n.css(%22display%22,%22table-cell%22)},o=function(e){var%20n=document.getElementsByTagName(%22head%22)[0],a=!1,t=document.createElement(%22script%22);t.src=e,t.onload=t.onreadystatechange=function(){a||this.readyState%26%26%22loaded%22!=this.readyState%26%26%22complete%22!=this.readyState||(a=!0)},n.appendChild(t)},l=window.setInterval(function(){$%26%26(window.clearInterval(l),e())},20);o(%22http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js%22)})()}();
```
