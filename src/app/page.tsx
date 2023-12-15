import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background space-y-4">
      <div className='bg-foreground w-10 h-10 rounded-md'>

      </div>

      <div className='flex gap-x-4'>

        <div className='grid gap-y-2'>
          card
          <div className='flex gap-x-2'>
            <div className='bg-card w-20 h-20 rounded-md flex justify-center items-center' >
              <div className='bg-card-foreground w-10 h-10 rounded-md' />
            </div>
            <div className='bg-card-foreground w-10 h-10 rounded-md' />
          </div>
        </div>

        <div className='grid gap-y-2'>
          overlay
          <div className='flex gap-x-2'>
            <div className='bg-overlay w-20 h-20 rounded-md flex justify-center items-center' >
              <div className='bg-overlay-light w-10 h-10 rounded-md' />
            </div>
            <div className='bg-overlay-light w-10 h-10 rounded-md' />
          </div>
        </div>
        <div className='grid gap-y-2'>
          mute
          <div className='flex gap-x-2'>
            <div className='bg-muted w-20 h-20 rounded-md flex justify-center items-center' >
              <div className='bg-muted-foreground w-10 h-10 rounded-md' />
            </div>
            <div className='bg-muted-foreground w-10 h-10 rounded-md' />
          </div>
        </div>

        <div className='grid gap-y-2'>
          popover
          <div className='flex gap-x-2'>
            <div className='bg-popover w-20 h-20 rounded-md flex justify-center items-center' >
              <div className='bg-popover-foreground w-10 h-10 rounded-md ' />
            </div>
            <div className='bg-popover-foreground w-10 h-10 rounded-md' />
          </div>
        </div>
      </div>
      <div className='flex gap-x-4'>
        <div className='grid gap-y-2'>
          info
          <div className='flex gap-x-2'>
            <div className='bg-info w-20 h-20 rounded-md grid justify-center items-center' >
              <div className='bg-info-foreground w-10 h-10 rounded-md ' />
              <div className='text-info-foreground flex justify-center rounded-md ' >
                inf
              </div>
            </div>
            <div className='bg-info-foreground w-10 h-10 rounded-md' />
          </div>
        </div>

        <div className='grid gap-y-2'>
          success
          <div className='flex gap-x-2'>
            <div className='bg-success w-20 h-20 rounded-md grid justify-center items-center' >
              <div className='bg-success-foreground w-10 h-10 rounded-md ' />
              <div className='text-success-foreground flex justify-center rounded-md ' >
                suc
              </div>
            </div>
            <div className='bg-success-foreground w-10 h-10 rounded-md' />
          </div>
        </div>


        <div className='grid gap-y-2'>
          warning
          <div className='flex gap-x-2'>
            <div className='bg-warning w-20 h-20 rounded-md grid justify-center items-center' >
              <div className='bg-warning-foreground w-10 h-10 rounded-md ' />
              <div className='text-warning-foreground flex justify-center rounded-md ' >
                war
              </div>
            </div>
            <div className='bg-destructive-foreground w-10 h-10 rounded-md' />
          </div>
        </div>


        <div className='grid gap-y-2'>
          destructive
          <div className='flex gap-x-2'>
            <div className='bg-destructive w-20 h-20 rounded-md grid justify-center items-center' >
              <div className='bg-destructive-foreground w-10 h-10 rounded-md ' />
              <div className='text-destructive-foreground flex justify-center rounded-md ' >
                des
              </div>
            </div>
            <div className='bg-destructive-foreground w-10 h-10 rounded-md' />
          </div>
        </div>

      </div>

      <div className='grid gap-y-2'>
        primary
        <div className='flex gap-x-2'>
          <div className='bg-primary w-20 h-20 rounded-md flex justify-center items-center' >
            <div className='bg-primary-foreground w-10 h-10 rounded-md' />
          </div>
          <div className='bg-primary-dark w-20 h-20 rounded-md flex justify-center items-center' >
            <div className='bg-primary-foreground rounded-md w-10 h-10' />
          </div>

          <div className='bg-primary-light w-20 h-20 rounded-md flex justify-center items-center' >
            <div className='bg-primary-foreground-dark rounded-md w-10 h-10' />
          </div>
        </div>
      </div>
      <div className='grid gap-y-2'>
        secondary
        <div className='flex gap-x-2'>
          <div className='bg-secondary w-20 h-20 rounded-md flex justify-center items-center' >
            <div className='bg-secondary-foreground w-10 h-10 rounded-md' />
          </div>
          <div className='bg-secondary-dark w-20 h-20 rounded-md flex justify-center items-center' >
            <div className='bg-secondary-foreground rounded-md w-10 h-10' />
          </div>

          <div className='bg-secondary-light w-20 h-20 rounded-md flex justify-center items-center' >
            <div className='bg-secondary-foreground-dark rounded-md w-10 h-10' />
          </div>
        </div>
      </div>
      <div className='grid gap-y-2'>
        accent
        <div className='flex gap-x-2'>
          <div className='bg-accent w-20 h-20 rounded-md flex justify-center items-center' >
            <div className='bg-accent-foreground w-10 h-10 rounded-md' />
          </div>
          <div className='bg-accent-dark w-20 h-20 rounded-md flex justify-center items-center' >
            <div className='bg-accent-foreground rounded-md w-10 h-10' />
          </div>

          <div className='bg-accent-light w-20 h-20 rounded-md flex justify-center items-center' >
            <div className='bg-accent-foreground-dark rounded-md w-10 h-10' />
          </div>
        </div>
      </div>
    </main>
  )
}
