export const cartAnimation = (event: any) => {
  const getClosest = function (elem: any, selector: any) {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  // start animation block
  let imgToDrag = getClosest(event.target, ".product-card");

  if (!imgToDrag) return;

  let viewCart = document.getElementsByClassName("product-cart")[0];
  let imgToDragImage = imgToDrag.querySelector(".product-image");

  let disLeft = imgToDrag.getBoundingClientRect().left;
  let disTop = imgToDrag.getBoundingClientRect().top;
  let cartLeft = viewCart.getBoundingClientRect().left;
  let cartTop = viewCart.getBoundingClientRect().top;
  let image = imgToDragImage.cloneNode(true);
  image.style =
    "z-index: 11111; width: 100px;opacity:1; position:fixed; top:" +
    disTop +
    "px;left:" +
    disLeft +
    "px;transition: left 1s, top 1s, width 1s, opacity 1s cubic-bezier(1, 1, 1, 1);border-radius: 50px; overflow: hidden; box-shadow: 0 21px 36px rgba(0,0,0,0.1)";
  var reChange = document.body.appendChild(image);
  setTimeout(function () {
    image.style.left = cartLeft + "px";
    image.style.top = cartTop + "px";
    image.style.width = "40px";
    image.style.opacity = "0";
  }, 200);
  setTimeout(function () {
    reChange.parentNode.removeChild(reChange);
  }, 1000);
  // End Animation Block
};
