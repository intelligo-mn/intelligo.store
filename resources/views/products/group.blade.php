<div class="col-xs-12">

    @foreach($product->group as $key => $group)

        @if($key != 'images')
            <div class="row">&nbsp;</div>
            <div class="row">
              <div class="col-lg-12">
                <small class="black_color">{{ ucfirst($key) }}:</small>
              </div>
            </div>
        @endif

        @foreach($group as $groupFeatures)

            @if($key == 'images')
                <a  ng-mouseover="count = count + 1"
                    href="{{ $groupFeatures[0]==$product->id? 'javascript:void(0);' : 'products/'.$groupFeatures[0] }}" >

                  <img src = "img/no-image.jpg?h=60" lazy-img = "{{ $groupFeatures[1] }}?w=50" alt="" width="50px" class="img-rounded"
                       style="{{ $groupFeatures[0]==$product->id? 'border: solid;':'' }}"
                       @if($groupFeatures[0]!=$product->id)
                           ng-mouseenter="hover{{ $groupFeatures[0] }} = true"
                           ng-mouseleave="hover{{ $groupFeatures[0] }} = false"
                           ng-style="hover{{ $groupFeatures[0] }} ? {'border': 'solid'}: {'border': '0'}"
                        @endif
                       >

                </a>

            @else

                <a @if($groupFeatures[0]!=$product->id)
                    ng-mouseenter="hover{{ $groupFeatures[0] }} = true"
                    ng-mouseleave="hover{{ $groupFeatures[0] }} = false"
                    ng-class="hover{{ $groupFeatures[0] }} ? 'btn-info': 'btn-default'"
                   @endif
                   href="{{ $groupFeatures[0]==$product->id? 'javascript:void(0);' : 'products/'.$groupFeatures[0] }}"
                   class="btn btn-xs {{ $groupFeatures[0]==$product->id? 'btn-primary':'btn-default' }}"
                   style="margin-top: 3px;">
                    {{ $groupFeatures[1] }}
                </a>

            @endif

        @endforeach

    @endforeach
</div>