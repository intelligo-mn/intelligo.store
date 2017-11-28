<h2>Add a new message</h2>
<form action="{{ route('messages.show', array($userinfo->username_slug, $thread->id)) }}" method="post">
    {{ method_field('post') }}
    {{ csrf_field() }}
        
    <!-- Message Form Input -->
    <div class="form-group">
        <textarea name="message" class="form-control">{{ old('message') }}</textarea>
    </div>

    <input type="hidden" name="recipients[]" value="{{ $thread->id }}">

    <!-- Submit Form Input -->
    <div class="form-group">
        <button type="submit" class="btn btn-primary form-control">Submit</button>
    </div>
</form>