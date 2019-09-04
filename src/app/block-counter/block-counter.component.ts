import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../../neo-one/angular.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-block-counter',
  templateUrl: './block-counter.component.html',
  styleUrls: ['./block-counter.component.css']
})
export class BlockCounterComponent implements OnInit {
  blockCount: number;

  constructor(private contractsService: ContractsService) {
    this.blockCount = 0;
  }

  ngOnInit() {
    this.getBlocks();
  }

  getBlocks(): void {
    combineLatest(this.contractsService.client.block$, this.contractsService.client.currentUserAccount$)
      .subscribe(async ([block, account]) => {
        this.blockCount = block.block.index;
        // console.log(account);
        // const balance = account === undefined ? await Promise.resolve(new BigNumber('0')) :
        //   await this.withContractsService.one.balanceOf(account.id.address);
        // this.fromBalance = balance.toNumber();
    });
  }


}
