(function () {
    var bannerNavUl = document.getElementById('banner-nav-ul');
    var bannerNav = document.getElementById('banner-nav');
    var menus = document.querySelectorAll('.menus-box .menu');
    var bannerLis = document.querySelectorAll('#banner-nav-ul li');

    //onmouseover 冒泡， onmouseenter 不冒泡
    bannerNavUl.onmouseover = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            // 得到触碰的这个li元素身上的data-t属性
            var t = e.target.getAttribute('data-t');
            for (let i = 0; i < bannerLis.length; i++) {
                bannerLis[i].className = bannerLis[i].getAttribute('data-t');
            }
            e.target.className += ' current';

            var themenu = document.querySelector('.menus-box .menu[data-t=' + t + ']');
            //排他操作
            for (let i = 0; i < menus.length; i++) {
                menus[i].className = 'menu';
            }

            themenu.className = 'menu current'

        }
    }

    bannerNav.onmouseleave = function (e) {
        for (let i = 0; i < bannerLis.length; i++) {
            bannerLis[i].className = bannerLis[i].getAttribute('data-t');
            menus[i].className = 'menu';
        }

    }
})();