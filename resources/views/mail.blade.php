<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>


 <div class="row">
            <div class="col-md-12">
                <h1>Холбоо барих</h1>
                <hr>
                <form action="{{ url('contact') }}" method="POST">
                    {{ csrf_field() }}
                    <div class="form-group">
                        <label name="email">Мэйл хаяг:</label>
                        <input id="email" name="email" class="form-control">
                    </div>

                    <div class="form-group">
                        <label name="subject">Гарчиг:</label>
                        <input id="subject" name="subject" class="form-control">
                    </div>

                    <div class="form-group">
                        <label name="message">Зурвас:</label>
                        <textarea id="message" name="message" class="form-control">Зурвас бичнэ үү...</textarea>
                    </div>

                    <input type="submit" value="Send Message" class="btn btn-success">
                </form>
            </div>
        </div>
</body>
</html>