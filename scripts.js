function openPopup(product) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupSpecs = document.getElementById('popup-specs');
    const popupDescription = document.getElementById('popup-description');

    const productsData = {
        'semi-premium': {
            image: 'Sesame.jpg',
            title: 'Sesame seeds - semi premium',
            specs: `
                <b>Product Specifications:</b><br>
                Oil Content: 50% oil<br>
                Shape: Oval<br>
                Moisture: 6% max<br>
                FFA: 2% max<br>
                Admixture: 1% max<br>
                Salmonella: Absent/25g
            `,
            description: `
                Sesame (<i>Sesamum indicum</i>) cultivation originated in India and these are among the oldest oilseeds known to mankind. 
                India produces huge quantities of sesame seed and ranks second in its production worldwide after Tanzania. 
                Sesame seeds have a rich crunchy flavour and hence used in various world cuisines. 
                Once the oil is extracted from the seed, the residue is used as cattle feed. 
                White and black sesame seeds are produced in large quantities in India and grow round the year.
            `
        },
        'premium': {
            image: 'premium.jpg',
            title: 'Sesame seeds - premium',
            specs: `
                <b>Product Specifications:</b><br>
                Oil Content: 55% oil<br>
                Shape: Oval<br>
                Moisture: 6% max<br>
                FFA: 2% max<br>
                Admixture: 1% max<br>
                Salmonella: Absent/25g
            `,
            description: `
                Sesame (<i>Sesamum indicum</i>) cultivation originated in India and these are among the oldest oilseeds known to mankind. 
                India produces huge quantities of sesame seed and ranks second in its production worldwide after Tanzania. 
                Sesame seeds have a rich crunchy flavour and hence used in various world cuisines. 
                Once the oil is extracted from the seed, the residue is used as cattle feed. 
                White and black sesame seeds are produced in large quantities in India and grow round the year.
            `
        },
        'natural': {
            image: 'Natural.jpg',
            title: 'Sesame seeds - natural',
            specs: `
                <b>Product Specifications:</b><br>
                Moisture:         8% Max<br>
                Purity:     99.90% Min<br>
                Admixture:       0.10% Max<br>
                Oil:        48% Min<br>
                FFA:        2% Max<br>
                Salmonella:         Absent/gm
            `,
            description: `
                Sesame (<i>Sesamum indicum</i>) cultivation originated in India and these are among the oldest oilseeds known to mankind. 
                India produces huge quantities of sesame seed and ranks second in its production worldwide after Tanzania. 
                Sesame seeds have a rich crunchy flavour and hence used in various world cuisines. 
                Once the oil is extracted from the seed, the residue is used as cattle feed. 
                White and black sesame seeds are produced in large quantities in India and grow round the year.
            `
        }
    };

    const productData = productsData[product];
    
    popupImage.src = productData.image;
    popupTitle.innerHTML = productData.title;
    popupSpecs.innerHTML = productData.specs;
    popupDescription.innerHTML = productData.description;

    console.log(productData);

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}
