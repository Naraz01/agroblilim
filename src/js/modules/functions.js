export function collection() {
    $(document).ready(function () {
        const addlist = document.querySelectorAll('.addlist-item');
        const items = document.querySelector('.task-list');
        const deletes = document.querySelectorAll('.delete')
       
        let arr = [];
        

        for (let i = 0; i < addlist.length; i++) {
            addlist[i].addEventListener('click', function(e){
                console.log(arr)
                console.log('arr', arr[i])
                console.log('e', e.target.text)

                if (!arr.includes(e.target.text)) {
                    arr.push(e.target.text)

                    let newListItem = document.createElement('p');
                    newListItem.textContent = e.target.text;
                    const btn = document.createElement('span')
                    btn.className = 'delete';
                    btn.textContent = 'X';
                    newListItem.appendChild(btn)
                    btn.addEventListener('click', (e) => {
                        items.removeChild(newListItem)    
                    })
                    items.appendChild(newListItem)
                }
            })
        }   
        for (let j = 0; j < arr.length; j++) {
            let newListItem = document.createElement('p');
            newListItem.textContent = arr[j];
            if(arr[j] !== '') {
                const btn = document.createElement('span')
                btn.className = 'delete';
                btn.textContent = 'X';    
                newListItem.appendChild(btn)
                btn.addEventListener('click', (e) => {
                    items.removeChild(newListItem)    
                })
            }
            items.appendChild(newListItem)
        }
        
    })
}

export function Sliders() {
    $(document).ready(function () {
        $('.popular-items').slick({
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            cssEase: 'ease-in-out',
            prevArrow:"<div class='popular-prev'><img src='../../img/popular-prev.svg'/></div>",
            nextArrow:"<div class='popular-next'><img src='../../img/popular-next.svg'/></div>",
             responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    })
}
export function inputSelect() {
    document.addEventListener('DOMContentLoaded', createSelect, false);
    function createSelect() {
        var select = document.getElementsByTagName('select'),
        liElement,
        ulElement,
        optionValue,
        iElement,
        optionText,
        selectDropdown,
        elementParentSpan;

        for (var select_i = 0, len = select.length; select_i < len; select_i++) {
            //console.log('selects init');

        select[select_i].style.display = 'none';
        wrapElement(document.getElementById(select[select_i].id), document.createElement('div'), select_i, select[select_i].getAttribute('placeholder-text'));

        for (var i = 0; i < select[select_i].options.length; i++) {
            liElement = document.createElement("li");
            optionValue = select[select_i].options[i].value;
            optionText = document.createTextNode(select[select_i].options[i].text);
            liElement.className = 'select-dropdown__list-item';
            liElement.setAttribute('data-value', optionValue);
            liElement.appendChild(optionText);
            ulElement.appendChild(liElement);

            liElement.addEventListener('click', function () {
            displyUl(this);
            }, false);
        }
        }
        function wrapElement(el, wrapper, i, placeholder) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);

        document.addEventListener('click', function (e) {
            let clickInside = wrapper.contains(e.target);
            if (!clickInside) {
            let menu = wrapper.getElementsByClassName('select-dropdown__list');
            menu[0].classList.remove('active');
            }
        });

        var buttonElement = document.createElement("button"),
            spanElement = document.createElement("span"),
            spanText = document.createTextNode(placeholder);
            iElement = document.createElement("i");
            ulElement = document.createElement("ul");

            wrapper.className = 'select-dropdown select-dropdown--' + i;
            buttonElement.className = 'select-dropdown__button select-dropdown__button--' + i;
            buttonElement.setAttribute('data-value', '');
            buttonElement.setAttribute('type', 'button');
            spanElement.className = 'select-dropdown select-dropdown--' + i;
            iElement.className = 'zmdi zmdi-chevron-down';
            ulElement.className = 'select-dropdown__list select-dropdown__list--' + i;
            ulElement.id = 'select-dropdown__list-' + i;

            wrapper.appendChild(buttonElement);
            spanElement.appendChild(spanText);
            buttonElement.appendChild(spanElement);
            buttonElement.appendChild(iElement);
            wrapper.appendChild(ulElement);
        }

        function displyUl(element) {

        if (element.tagName == 'BUTTON') {
            selectDropdown = element.parentNode.getElementsByTagName('ul');
            //var labelWrapper = document.getElementsByClassName('js-label-wrapper');
            for (var i = 0, len = selectDropdown.length; i < len; i++) {
            selectDropdown[i].classList.toggle("active");
            //var parentNode = $(selectDropdown[i]).closest('.js-label-wrapper');
            //parentNode[0].classList.toggle("active");
            }
        } else if (element.tagName == 'LI') {
            var selectId = element.parentNode.parentNode.getElementsByTagName('select')[0];
            selectElement(selectId.id, element.getAttribute('data-value'));
            elementParentSpan = element.parentNode.parentNode.getElementsByTagName('span');
            element.parentNode.classList.toggle("active");
            elementParentSpan[0].textContent = element.textContent;
            elementParentSpan[0].parentNode.setAttribute('data-value', element.getAttribute('data-value'));
        }

        }
        function selectElement(id, valueToSelect) {
        var element = document.getElementById(id);
        element.value = valueToSelect;
        element.setAttribute('selected', 'selected');
        }
        var buttonSelect = document.getElementsByClassName('select-dropdown__button');
        for (var i = 0, len = buttonSelect.length; i < len; i++) {
        buttonSelect[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    displyUl(this);
                }, false);
            }
    }
}
export function MenuSelect() {
    var navigationSelect = document.querySelector('.select-wrapper');

    function initSelect(elem){
        if (elem != null) {
            var selectHolder = elem.querySelector('.holder');
            var selectOptions = elem.querySelectorAll('.dropdownOption li');
            var dropHolder = elem.querySelector('.dropdown');
            var selectedOption = selectOptions[0];
            if (selectedOption != null) {
                selectedOption.classList.add('current');
        
                selectHolder.addEventListener('click', function () {
                    dropHolder.classList.toggle('active');
                });
        
                selectOptions.forEach(function(currentElement) {
                    currentElement.addEventListener('click', function(){
                        selectedOption.classList.remove('current');
                        selectedOption = currentElement;
                        currentElement.classList.add('current');
                        selectHolder.innerText = currentElement.textContent;
                        dropHolder.classList.toggle('active');
                    });
                });
            }
        };
    }
    initSelect(navigationSelect);
}
export function Tabs() {
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
        tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
    })
}
export function mySelect() {
    const select = document.querySelectorAll('.selectBtn');
    const option = document.querySelectorAll('.my-option');
    let index = 1;

    select.forEach(a => {
        a.addEventListener('click', b => {
            const next = b.target.nextElementSibling;
            next.classList.toggle('toggle');
            next.style.zIndex = index+2;
        })
    })
    option.forEach(a => {
        a.addEventListener('click', b => {
            b.target.parentElement.classList.remove('toggle');
            
            const parent = b.target.closest('.my-select').children[0];
            parent.setAttribute('data-type', b.target.getAttribute('data-type'));
            parent.innerText = b.target.innerText;
        })
    })
}
export function menuProfile() {
    $(document).ready(function () {
        $('.header-user__click').on('click', function () {
            $('.header-menu').toggleClass('header-menu__active');
            $('.header-user').toggleClass('header-user__active');
            $('.none-menu').toggleClass('none-menu__active');
        });
        $('.none-menu').on('click', function () {
            $('.none-menu').toggleClass('none-menu__active');
            $('.header-menu').toggleClass('header-menu__active');
            $('.header-user').toggleClass('header-user__active');
        });  
    })
}
export function Modal() {
    $(document).ready(function () {
        let ebModal = document.getElementById('mySizeChartModal');
        let ebBtn = document.getElementById("mySizeChart");
        let ebSpan = document.getElementsByClassName("ebcf_close")[0];
        let modalAuth = document.querySelector('.modal-auths__open');
        let modalReset = document.querySelector('.modal-registration');

        ebBtn.onclick = function() {
            ebModal.style.display = "flex";
        }
      
        ebSpan.onclick = function() {
            ebModal.style.display = "none";
            modalAuth.style.display = "block";
            modalReset.style.display = "none";
        }
      
        window.onclick = function(event) {
            if (event.target == ebModal) {
                ebModal.style.display = "none";
                modalAuth.style.display = "block";
                modalReset.style.display = "none";
            }
        }
    });
}

export function ResetPassword() {
    $(document).ready(function () {
        let modalAuth = document.querySelector('.modal-auths__open');
        let modalReset = document.querySelector('.modal-registration');
        $('.modal-reg').on('click', function () {
            modalAuth.style.display = "none";
            modalReset.style.display = "block";
        });
    });
}

export function Radio() {
    $(document).ready(function() {
        $("input[type=radio]").prop("checked", false);
        $("input[type=radio]:first").prop("checked", true);
      
        $("input[type=radio]").click(function(event) {
          $("input[type=radio]").prop("checked", false);
          $(this).prop("checked", true);
      
          //event.preventDefault();
        });
      });
}

export function searchOpen() {
    $(document).ready(function () {
        
        let searchExtended = document.querySelector('.search-extended');
        let searchFormBottom = document.querySelector('.search-form__bottom');
        $('.search-extended').on('click', function () {
            searchFormBottom.classList.add('search-form__bottom-active');
            searchExtended.style.display = "none";
        });
    });
}
