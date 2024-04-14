let lipsProductArr =
[
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/products/MousseMuseMaskproofLipCreamPDPimages-1080x1080-1TO5SHADES1_31cc2990-5ede-4476-a776-4c08c282022f.jpg?v=1680367228&w=640&q=75",
        title:"Mousse Muse Lip Cream - 05 Red Ballon",
        price:"",
        mrp:"₹599",
        original:"₹479",
        btn:"ADD TO BAG",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/products/MousseMuseMaskproofLipCreamPDPimages-1080x1080-6TO8-1_a276b7c9-d355-41e8-837c-84a4c5369c05.jpg?v=1680367245&w=640&q=75",
        title:"Mousse Muse Lip Cream - 06 Harmony in Red",
        price:"",
        mrp:"₹599",
        original:"₹479",
        btn:"ADD TO BAG",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/products/MousseMuseMaskproofLipCreamPDPimages-1080x1080-6TO8-1_57a84811-dafe-46aa-8b7e-b84df713e8c0.jpg?v=1680367282&w=640&q=75",
        title:"SUGAR Mousse Muse Lip Cream - 08 Spring Flower",
        price:"",
        mrp:"₹599",
        original:"₹479",
        btn:"ADD TO BAG",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/products/Artboard1_afb1d932-4aaf-4f25-a299-03d6d8f75dd1.jpg?v=1675959716&w=640&q=75",
        title:"SUGAR Tipsy Lips Scrub + Balm Duo - 02 Cosmopolitan",
        price:"",
        mrp:"₹499",
        original:"₹399",
        btn:"ADD TO BAG",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/6_cf018ce6-c7d9-4ebf-9d00-3aa7433d41f0.jpg?v=1706542931&w=640&q=75",
        title:"Limited-Edition La La Love 18HR Liquid Lipstick - 08 Peach Passion",
        price:"",
        mrp:"₹399",
        original:"₹319",
        btn:"ADD TO BAG",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/Seal-The-Show-Lip-Primer-PDP-Images.jpg?v=1690904074&w=640&q=75",
        title:"Seal The Show Lip Primer",
        price:"₹279",
        mrp:"₹649",
        original:"₹519",
        btn:"ADD TO BAG",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/10_8bd6ef9f-18f0-4cca-821b-c1d1be8d9531.jpg?v=1706542943&w=640&q=75",
        title:"Limited-Edition La La Love 18HR Liquid Lipstick - 11 Chocolate Charm",
        price:"",
        mrp:"₹399",
        original:"₹319",
        btn:"ADD TO BAG",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/products/MousseMuseMaskproofLipCreamPDPimages-1080x1080-1TO5SHADES1_7f23decc-e02a-4776-a62a-c4b9d9d67b50.jpg?v=1680367162&w=640&q=75",
        title:"Mousse Muse Lip Cream - 01 Backlit Nude",
        price:"₹",
        mrp:"₹599",
        original:"₹479",
        btn:"ADD TO BAG",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/2_18ef40b3-78b5-4619-8676-4f97d031a692.jpg?v=1706542921&w=640&q=75",
        title:"Limited-Edition La La Love 18HR Liquid Lipstick - 06 Burgundy Bae.",
        price:"",
        mrp:"₹399",
        original:"₹319",
        btn:"ADD TO BAG",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/products/MousseMuseMaskproofLipCreamPDPimages-1080x1080-1TO5SHADES1_ce6b7369-5604-4eed-bde3-baa0a76e2c8c.jpg?v=1685637335&w=640&q=75",
        title:"Mousse Muse Lip Cream - 04 Water Lillies",
        price:"",
        mrp:"₹599",
        original:"₹479",
        btn:"ADD TO BAG",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/8_6362ed1f-619b-41da-9fa0-c0df4cbcce50.jpg?v=1706542938&w=640&q=75",
        title:"Limited-Edition La La Love 18HR Liquid Lipstick - 10 Fawn Fling",
        price:"",
        mrp:"₹399",
        original:"₹319",
        btn:"ADD TO BAG",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/4_5a9c2b1c-7fce-41c5-9f01-ebabf9dcbb96.jpg?v=1706542926&w=640&q=75",
        title:"Limited-Edition La La Love 18HR Liquid Lipstick - 07 Rose Revere",
        price:"",
        mrp:"₹399",
        original:"₹319",
        btn:"ADD TO BAG",
    },
];

let parent = document.getElementById("product-child-div");
function showData(items){
    let parentinnerdiv = document.createElement("div");
    parentinnerdiv.className="productinnerdiv"

    items.forEach((product) => {
        let card = document.createElement("div")
        card.className="card";

        let imgdiv = document.createElement("div");
        imgdiv.className="imgdiv";

        let img = document.createElement("img");
        img.src=product.img;
        img.className="img";

        let detaildiv = document.createElement("div");
        detaildiv.className="detail";

        let title = document.createElement("p");
        title.textContent=product.title;

        let mrp = document.createElement("h3");
        mrp.textContent=product.mrp;
        mrp.className="mrp";

        let originaldiv = document.createElement("div");
        originaldiv.className="originaldiv";

        let pricediv = document.createElement("div");
        pricediv.className="pricediv";
        pricediv.innerHTML="<p>Price</p>"

        let original = document.createElement("p");
        original.textContent=product.original;
        original.className="original";

        let hearticondiv = document.createElement("div");
        hearticondiv.className="hearticondiv";
        hearticondiv.innerHTML="<i class='bx bx-heart'></i>";

        let iconandbtndiv = document.createElement("div")
        iconandbtndiv.className="iconandbtndiv"

        let button = document.createElement("button");
        button.className="additems";
        button.textContent=product.btn;


        imgdiv.append(img);
        originaldiv.append(pricediv, original)
        iconandbtndiv.append(hearticondiv, button)
        detaildiv.append(title, mrp, originaldiv, iconandbtndiv)
        card.append(imgdiv, detaildiv);
        parentinnerdiv.append(card);
        parent.append(parentinnerdiv);
    });

}

showData(lipsProductArr)