@if($relatedid !== Auth::user()->id)
<div class="modeadmin_header">
    <div class="modeadmin_text">
        <i class="fa fa-unlock"></i>
        <h6>{{ isset($relatedtext) ? $relatedtext : 'You see here because you are an admin...' }}</h6>
    </div>
</div>
@endif