<div class="external-sign-in">
    <a href="javascript:" data-link="{{ Request::url() }}" data-name="{{ $entry->title > "" ? $entry->title : $post->title }}" data-image="{{ makepreview($entry->image, null, 'entries') }}" data-description="{{ $entry->body > "" ? substr(strip_tags($entry->body),0,255) : $post->body }}" class="Facebook  mini postToFacebookFeed"></a>
    <a href="http://pinterest.com/pin/create/link/?url={{ Request::url() }}&media={{ makepreview($entry->image, null, 'entries') }}&description={{ isset($entry->title) ? $entry->title : $post->title }}" class="Pinterest popup-action mini"></a>
    <a href="https://twitter.com/intent/tweet?url={{ Request::url() }}"  class="Twitter popup-action mini"></a>
</div>