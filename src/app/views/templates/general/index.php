<?php $this->load_fragment('skeleton_template/header', ['title' => __($title)]); ?>
<?php if (!$is_ajax): ?>
<article class="page full">
<?php endif; ?>
    <h1 class="text-center"><?= __($title) ?></h1>
    <div class="container"><?= __($body) ?></div>
<?php if (!$is_ajax): ?>
</article>
<?php endif; ?>
<?php $this->load_fragment('skeleton_template/footer'); ?>
<?php if (!$is_ajax): ?>
<script>
    (function() {
        $('#toggle').removeClass('i');
        $('.btn-box').css('display', 'none');
    })();
</script>
<?php endif; ?>
