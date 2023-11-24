function MessagesVisitor(data) {
    var html = `<div>
                   <h3> ${data.nom}</h3>
                   <p style="margin-top:10px;font-size:14px;font-weigth:300">${data.message}</p>
                </div>`;
   return html;             
} 
module.exports = {MessagesVisitor}