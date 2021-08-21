// function for best price calculation
function basePrice(product, price) {
    const BestPrice = document.getElementById(product + '-price');
    BestPrice.innerText = price;
    return BestPrice;
};

// event handler for extra memory cost
document.getElementById('memory-default-button').addEventListener('click', function () {
    basePrice('memory', '0');
    updateTotalPrice();
    totalPriceBeforPromoApply();
});

document.getElementById('memory-extra-price').addEventListener('click', function () {
    basePrice('memory', '180');
    updateTotalPrice();
    totalPriceBeforPromoApply();
});


// event handler for storage cost
document.getElementById('storage-default-button').addEventListener('click', function () {
    basePrice('storage', '0');
    updateTotalPrice();
    totalPriceBeforPromoApply();

});

document.getElementById('extra-for-256gb').addEventListener('click', function () {
    basePrice('storage', '100');
    updateTotalPrice();
    totalPriceBeforPromoApply();
});

document.getElementById('extra-for-1tb').addEventListener('click', function () {
    basePrice('storage', '180');
    updateTotalPrice();
    totalPriceBeforPromoApply();
});

// event handler for delivery cost
document.getElementById('delivery-default-button').addEventListener('click', function () {
    basePrice('delivery', '0');
    updateTotalPrice();
    totalPriceBeforPromoApply();
});

document.getElementById('quick-delivery').addEventListener('click', function () {
    basePrice('delivery', '20');
    updateTotalPrice();
    totalPriceBeforPromoApply();
});

// funtion for update total price in (table)
function updateTotalPrice() {
    const totalPriceValue = getTotalPrice();
    const totalField = document.getElementById('total-price');
    totalField.innerText = totalPriceValue;
};

// update final total price (before applying promo)
function totalPriceBeforPromoApply() {
    const finalTotalBeforePromApply = document.getElementById('final-total-price');
    const getFinalTotalFromTalbe = getTotalPrice();
    finalTotalBeforePromApply.innerText = getFinalTotalFromTalbe;
};

// function for getting individual price
function getIndividualPrice(product) {
    const Price = document.getElementById(product + '-price');
    const PriceText = Price.innerText;
    const PriceAmmount = parseInt(PriceText);
    return PriceAmmount;
};

// funtion for calculating total price
function getTotalPrice() {
    const bestPrice = getIndividualPrice('best');
    const memoryPrice = getIndividualPrice('memory');
    const storagePrice = getIndividualPrice('storage');
    const deliveryPrice = getIndividualPrice('delivery');
    let totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    return totalPrice;
};


// promo code mathing and updating reduced final Price
document.getElementById('promo-button').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code-input');
    const promoCodeText = promoCode.value;
    if (promoCodeText == 'stevekaku') {
        const totalPrice = getTotalPrice();
        const reducedPrice = totalPrice * 0.8;
        const finalTotalField = document.getElementById('final-total-price');
        finalTotalField.innerText = reducedPrice;
    }
    else if (promoCodeText != 'stevekaku') {
        const finalTotalField = document.getElementById('final-total-price');
        const totalPrice = getTotalPrice();
        finalTotalField.innerText = totalPrice;
    }
    promoCode.value = '';
});

