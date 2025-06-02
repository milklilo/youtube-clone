function searchvideo(event) {
    const search = event.target.value;
    const videos = document.getElementsByClassName("video-card");

    for (const video of videos) {
        const [channelNameElement, categoryElement] = video.getElementsByTagName("p");

        const videoinfo = {
            title: video.getElementsByTagName("h3")[0].innerTexT,
            channelName: channelNameElement.innerText,
            category: categoryElement.innerText
        }
    }
}

function matches(videoInfo, searchTerm) {
    return (
        videoInfo.title.includes(searchTerm) ||
        videoInfo.channelName.includes(searchTerm) ||
        videoInfo.category.includes(searchTerm)
    );
}