<?php $this->load_fragment('skeleton_template/header', ['title' => __('About Us')]); ?>
    <div class="page about-content">
      <header>
          <h1>About<span class="tabheading"> Us</span></h1>
      </header>
      <?= __($about_us) ?>
    </div>
<?php $this->load_fragment('skeleton_template/footer'); ?>
<?php if (!$is_ajax): ?>
<script>
    (function() {
        $('#toggle').removeClass('i');
        $('.btn-box').css('display', 'none');
    })();
</script>
<?php endif; ?>
