<script>
    import { isDisplaySvelte } from '../../store';
  </script>
  
  <!--use "$" to read the store value-->
  <button on:click={() => isDisplaySvelte.set(!$isDisplaySvelte)}>Cart</button>