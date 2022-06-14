import data from "../db.json" assert { type: "json" };

// console.log(data)

const productElement = document.querySelector("#product");

let _content = "";
data.forEach(function (item) {
  _content =
    _content +
    /*html*/ `
      <a href="./detail/index.html?id=${item.id}" id="pro">
      <img
        src="${item.images[0].medium_url}"
        alt=""
        class="object-contain w-full max-h-[210px] sm:h-full sm:w-full lg:max-w-full lg:max-h-[180px]"
      />
      <div class="p-3 mt-3 sm:p-3 md:p-3">
        <img src="./images/tikinow2.svg" alt="" />
        <p class="text-xanh text-xs sm:my-2">GIAO SIÊU TỐC 2H</p>
        <p class="mb-1 text-sm sm:text-xs sm:mb-2 line-clamp-2 md:text-[13px] md:leading-5 " >${
          item.name
        }</p>
        <div class="flex relative sm:my-1">
          <img src="./images/sao.svg" alt="" />
          <img src="./images/sao.svg" alt="" />
          <img src="./images/sao.svg" alt="" />
          <img src="./images/sao.svg" alt="" />
          <img src="./images/sao.svg" alt="" class="border-r pr-1 sm:pr-[2px]" />
          <p class="ml-2   sm:text-[10px] sm:leading-5 text-[14px] leading-6">${
            item.quantity_sold?.text ? item.quantity_sold.text : ""
          }</p>
        </div>
        <p class="text-do">
          ${item.current_seller.price.toLocaleString("de-DE")}đ
        </p>
        <img src="./images/rehonhoantien.svg" alt="" />
      </div>
    </a>
    `;
  productElement.innerHTML = _content;
});
