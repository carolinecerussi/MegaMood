import React from "react";
import styled from 'styled-components';


const PayPalButton = styled.button`
color: white;
shape: pill;
label: donate;
layout: horizontal;
&: hover {
	color: pink;
	cursor: pointer;
	}
	

onInit: function (data, actions) {
	actions.disable();

	if(invoiceidDiv.style.display === "block") {
		elArr.push(invoiceid);
	}

	elArr.forEach(function (item) {
		item.addEventListener('keyup', function (event) {
			var result = elArr.every(validate);
			if (result) {
				actions.enable();
			} else {
				actions.disable();
			}
		});
	});
},

onClick: function () {
	if (description.value.length < 1) {
		descriptionError.style.visibility = "visible";
	} else {
		descriptionError.style.visibility = "hidden";
	}

	if (amount.value.length < 1) {
		priceError.style.visibility = "visible";
	} else {
		priceError.style.visibility = "hidden";
	}

	if (invoiceid.value.length < 1 && invoiceidDiv.style.display === "block") {
		invoiceidError.style.visibility = "visible";
	} else {
		invoiceidError.style.visibility = "hidden";
	}

	purchase_units[0].description = description.value;
	purchase_units[0].amount.value = amount.value;
	purchase_units[0].amount.breakdown.item_total.value = amount.value;
	purchase_units[0].items[0].unit_amount.value = amount.value;

	if(invoiceid.value !== '') {
		purchase_units[0].invoice_id = invoiceid.value;
	}
},

createOrder: function (data, actions) {
	return actions.order.create({
		purchase_units: purchase_units,
	});
},

onApprove: function (data, actions) {
	return actions.order.capture().then(function (orderData) {

		// Full available details
		console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

		// Show a success message within this page, e.g.
		const element = document.getElementById('paypal-button-container');
		element.innerHTML = '';
		element.innerHTML = '<h3>Thank you for your payment!</h3>';

		// Or go to another URL:  actions.redirect('thank_you.html');
		
	});
`;

function DonatePayPal() {

  const description = document.querySelector('#smart-button-container #description');
	const amount = document.querySelector('#smart-button-container #amount');
  const descriptionError = document.querySelector('#smart-button-container #descriptionError');
	const priceError = document.querySelector('#smart-button-container #priceLabelError');
  const invoiceid = document.querySelector('#smart-button-container #invoiceid');
  const invoiceidError = document.querySelector('#smart-button-container #invoiceidError');
  const invoiceidDiv = document.querySelector('#smart-button-container #invoiceidDiv');

	const	elArr = [description, amount];
  const purchase_units = [{"amount":{"currency_code":"USD","value":1,"breakdown":{"item_total":{"currency_code":"USD","value":1}}},"items":[{"name":"item name","unit_amount":{"currency_code":"USD","value":1},"quantity":"1","category":"DONATION"}]}]

	function initPayPalButton() {
	if (invoiceidDiv.firstChild.innerHTML.length > 1) {
		invoiceidDiv.style.display = "block";
	}
}
  function validate(event) {
   return event.value.length > 0;
  }
  
  }
 export default DonatePayPal();
