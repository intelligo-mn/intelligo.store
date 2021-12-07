<link rel="stylesheet" href="/assets/plugins/selectize.default.css" data-theme="default">
 <div class="modal-wrapper setting-form">
    <h2>Create a new message</h2>
    <form action="{{ route('messages.store') }}" method="post">
        {{ csrf_field() }}
            <!-- Subject Form Input -->
            <div class="form-group">
                <label class="control-label">Subject</label>
                <input type="text" class="cd-input form-control" name="subject" placeholder="Subject"
                       value="{{ old('subject') }}">
            </div>

            <!-- Message Form Input -->
            <div class="form-group">
                <label class="control-label">Message</label>
                <textarea name="message" style="height:300px" class="cd-input form-control">{{ old('message') }}</textarea>
            </div>

            @if($users->count() > 0)
                <div class="checkbox">
                    <select id="userslists" class="demo-default" name="category" multiple placeholder="Pick Users">
                        @foreach($users as $user)
                                <option value="{{ $user->id }},">{{ $user->username }}</option>
                        @endforeach
                    </select>
                </div>
            @endif
        <div class="clear"></div>
        <br>
        <br>
            <!-- Submit Form Input -->
            <div class="form-group">
                <button type="submit" class="button button-orange button-full">Submit</button>
            </div>

    </form>
</div>


<script src="/assets/plugins/selectize.min.js" type="text/javascript" charset="utf-8"></script>
<script>
    $( document ).ready(function() {

        $('#userslists').selectize({
            plugins: ['restore_on_backspace', 'remove_button'],
            persist: false,
            maxItems: 1,
            valueField: 'id',
            labelField: 'name',
            searchField: ['id', 'name'],
            sortField: 'text',
            create: function(input) {
                return {
                    value: input,
                    text: input
                }
            }
        });
    });
</script>
