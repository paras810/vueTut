<template >

    <div class="box">

        <div>
            <slot name="header"></slot>
        </div>

        <div>
            <slot name="content"></slot>
        </div>

        <div>
            <slot name="paras">
                <button>Click me</button>
            </slot>
        </div>

    </div>
</template> 

<script>
export default {
}

</script>  
<style >
    .box{
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    border: 2px solid red;
    padding: 1rem 0;
    box-shadow: 7px 9px 13px -6px black;
    width: 25vw;
    margin: 2rem auto;
    border-radius: 14px;
    }
</style>