module.exports = ({LineItemName,SKU,HSN_SAC,
Qty,
Rate,
Discount,
CGST_percentage,
CGST_AMt,
SGST_percentage,
SGST_AMt,
Amount }) => {
  
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
       <h2>Handlebars template to populate a table</h2>

<h3>data</h3>
<div id="data"></div>



<!-- The script element is used to define the Handlebars template -->
<script type="text/x-handlebars-template" id="tableTemplate">
<table>
<thead>
  <tr>
    {{#each array.[0]}}
      <th>{{@key}}</th>
    {{/each}}
  </tr>
</thead>
<tbody>
  {{#each array}}
    <tr>
    	{{#each this}}
        <td>{{this}}</td>
      {{/each}}
    </tr>
  {{/each}}
</tbody>
</table>
</script>

<div style="position: absolute;bottom: 5px;">
Read about this Fiddle at: <a href="http://jsdev.wikidot.com/howto:12" target="_blank">How To: Handlebars - Create Table element</a>
</div>
       
       </body>
    </html>
    `;
};