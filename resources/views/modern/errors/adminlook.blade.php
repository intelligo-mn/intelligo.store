@if($relatedid !== Auth::user()->id)
<div class="modeadmin_header">
    <div class="modeadmin_text">
        <i class="fa fa-unlock"></i>
       {{ isset($relatedtext) ? $relatedtext : 'You see here because you are an admin...' }}
    </div>
</div>
@endif