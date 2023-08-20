const feedPageScripts = () => {
    const feeds_el = document.querySelector('.display-feeds');

    const getFeeds = (callback) => {
        const feeds = new FeedsAPI();
        feeds.get().then(feeds_data => callback(feeds_data))        
    }
    
    const displayFeeds = () => {
        getFeeds((feeds) => {
            const placeholder_image = get_env('app_placeholder_img');
            console.log(app_env, 'app_env')
            console.log(placeholder_image, 'placeho')
            const result_element = formatArrayElements(
                feeds, 
                'ul', 
                (feed) => {
                    return `<li class="feed h-100 rounded overflow-hidden radius-10 relative">
                                <a href="${pages_path}/${feed.slug || 'feed.html#'}">
                                    <div class="overflow-hidden mb-3">
                                        <img src="${feed.post_thumbnail || placeholder_image}" class="w-100 feed-image"/>
                                    </div>
                                    <div class="p-5">
                                        <h2 class="text-medium mb-3"> ${capitalizeEachWord(feed.post_title)} </h2>
                                        <p class="text-justify">
                                            ${truncateText(feed.post_content)}
                                        </p>
                                        <span class="d-block text-right my-10 text-small"> ${feed.post_created_at} </span>
                                    </div>
                                </a> 
                            </li>`;
                }, 
                'd-inline-grid justify-center align-center grid-1-columns md-grid-2-columns lg-grid-3-columns grid-auto-rows-equal gap-20'
            );

            displayElement('.display-feeds', result_element);
        });
    }

    if(feeds_el){
        displayFeeds();
    }
}