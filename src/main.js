import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';


const API_KEY = '38581937-9c20710af1d4a9eb0308799a1';
const BASE_URL = 'https://pixabay.com/api/';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const spinner = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.loadMoreButton');

showLoadMore(false);
showLoadSpinner(false);

let selectedPicture = '';
let page = 1;
let limit = 40;




form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(ev) {
    ev.preventDefault();
    page = 1;
    changeLoaderPosition();
    showLoadMore(false);
    showLoadSpinner(true);
    gallery.innerHTML = '';
    selectedPicture = ev.target.image.value;
    const images = await fetchImages(selectedPicture);
    handleWithResponce(images);
}

async function fetchImages(image) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        image_type: "photo",
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page,
    });

    const response = await axios.get(`${BASE_URL}?${searchParams}&q=${image}`);
    return response.data;
}

function handleWithResponce(images) {
    showLoadMore(images.hits.length >= limit);

    if (!images.hits.length) {
        iziToast.warning({
            position: 'topRight',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        showLoadSpinner(false)
        return
    }
    showLoadSpinner(false);
    showIziToastMessage(images.total);
    renderGallery(images.hits);

    const galleryLightBox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    galleryLightBox.refresh();
}

loadMoreButton.addEventListener('click', onLoadMoreClick);

async function onLoadMoreClick() {
    page += 1;
    changeLoaderPosition();
    showLoadSpinner(true);
    showLoadMore(false);
    const response = await fetchImages(selectedPicture);
    showIziToastMessage(response.total);
    handleWithResponce(response);
    smoothScroll();


}

function renderGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, comments, downloads, views }) => `<li class='gallery-item'>
    <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        <div class="gallery-description">
      <span class='gallery-span'>
        <div class="upper-text">Likes</div>
        <div class="lower-text">${likes}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Views</div>
        <div class="lower-text">${views}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Comments</div>
        <div class="lower-text">${comments}</div>
      </span>
      <span class='gallery-span'>
        <div class="upper-text">Downloads</div>
        <div class="lower-text">${downloads}</div>
      </span>
      </div>
        </a>
</li>`).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
}

function showLoadSpinner(should) {
    spinner.style.display = should ? 'block' : 'none';
}

function showLoadMore(should) {
    loadMoreButton.style.display = should ? 'block' : 'none'
}

function showIziToastMessage(totalOfImages) {
    const totalPages = Math.ceil(totalOfImages / limit);
    if (page >= totalPages && page !== 1) {
        return iziToast.error({
            position: "topRight",
            message: "We're sorry, there are no more posts to load"
        });
    }
    if (page === 1) {
        return iziToast.success({
            position: 'topRight',
            message: `Congratulations! We found ${totalOfImages} images`,
            timeout: 2000,
        });
    }
}

function smoothScroll() {
    const cart = document.querySelector('.gallery-item');
    let heightOfOneCart = cart.getBoundingClientRect().height;
    window.scrollBy({ top: heightOfOneCart * 2, behavior: "smooth" })
}

function changeLoaderPosition() {
    page === 1 ? (spinner.style.top = "40%",
        spinner.style.left = '50%') : (spinner.style.top = '85%', spinner.style.left = '47%')
}





