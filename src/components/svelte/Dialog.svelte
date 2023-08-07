<script>
    import { isDisplaySvelte } from '../../store';
  </script>
  
  {#if $isDisplaySvelte}
  <aside>...</aside>
  {/if}