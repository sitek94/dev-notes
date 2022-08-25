<script lang="ts">
  export let title: string
  export let href: string
  export let body: string
  export let date: string
</script>

<li>
  <p class="text-sm text-gray-500">
    <time datetime={date}>{date}</time>
  </p>
  <a {href} class="mt-2 block">
    <p class="text-xl font-semibold text-gray-900">
      {title}
    </p>
    <p class="mt-3 text-base text-gray-500">
      {body}
    </p>
  </a>
  <div class="mt-3">
    <a
      {href}
      class="text-base font-semibold text-primary-600 hover:text-primary-500"
    >
      Read more
    </a>
  </div>
</li>
