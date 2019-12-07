// Select the node that will be observed for mutations
const targetNode = document.querySelector("._im_peer_history");

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: false };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
    var items = document.getElementsByClassName("im_msg_media_sticker");
    console.log("into function");

    for (var i = 0, len = items.length; i < len; i++) {
        myFunction(items[i]);
        }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);


function myFunction(item) {

    var stickerLink = item.getElementsByClassName("sticker_img")[0].getAttribute("src");
    console.log("into sticker link: " + stickerLink);

    if (map.has(stickerLink)) {
        console.log("this is need to replace");
        var newEl = document.createElement('div');
        newEl.innerHTML = '<b>' + map.get(stickerLink) + '</b>';

        item.parentNode.replaceChild(newEl, item);
    }
}

const map = new Map();
map.set("https://vk.com/sticker/1-4078-128", "**hehe *penguin");
map.set("https://vk.com/sticker/1-57-128", "**fear *cat");
map.set("https://vk.com/sticker/1-10581-128", "**smile *christmas tree");